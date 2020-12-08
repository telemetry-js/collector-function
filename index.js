'use strict'

const EventEmitter = require('events').EventEmitter
const singleMetric = require('@telemetry-js/metric').single

exports.sync = function (name, metricOptions, fn) {
  if (typeof metricOptions === 'function') {
    fn = metricOptions
    metricOptions = {}
  }

  return function plugin () {
    return new FunctionCollector(false, name, fn, metricOptions)
  }
}

exports.async = function (name, metricOptions, fn) {
  if (typeof metricOptions === 'function') {
    fn = metricOptions
    metricOptions = {}
  }

  return function plugin () {
    return new FunctionCollector(true, name, fn, metricOptions)
  }
}

class FunctionCollector extends EventEmitter {
  constructor (async, name, fn, metricOptions) {
    super()

    this._async = async
    this._name = name
    this._fn = fn
    this._metricOptions = metricOptions
  }

  ping (callback) {
    // TODO: reuse metric objects between pings
    const metric = singleMetric(this._name, this._metricOptions)

    if (this._async) {
      this._fn((err, value) => {
        if (err) return callback(err)

        metric.record(value)
        this.emit('metric', metric)

        callback()
      })
    } else {
      const value = this._fn()

      metric.record(value)
      this.emit('metric', metric)

      // No need to dezalgo ping()
      callback()
    }
  }
}
