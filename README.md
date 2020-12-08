# collector-function

> **Collect metric value from a function.**  
> A [`telemetry`](https://github.com/telemetry-js/telemetry) plugin.

[![npm status](http://img.shields.io/npm/v/telemetry-js/collector-function.svg)](https://www.npmjs.org/package/@telemetry-js/collector-function)
[![node](https://img.shields.io/node/v/@telemetry-js/collector-function.svg)](https://www.npmjs.org/package/@telemetry-js/collector-function)
[![Test](https://github.com/telemetry-js/collector-function/workflows/Test/badge.svg?branch=main)](https://github.com/telemetry-js/collector-function/actions)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Table of Contents

<details><summary>Click to expand</summary>

- [Usage](#usage)
- [API](#api)
- [Install](#install)
- [Acknowledgements](#acknowledgements)
- [License](#license)

</details>

## Usage

_Yet to document._

```js
const telemetry = require('@telemetry-js/telemetry')()
const fn = require('@telemetry-js/collector-function')

const rand = fn.sync('myapp.random.count', { unit: 'count' }, Math.random)

telemetry.task()
  .collect(rand)
```

## API

_Yet to document._

## Install

With [npm](https://npmjs.org) do:

```
npm install @telemetry-js/collector-function
```

## Acknowledgements

This project is kindly sponsored by [Reason Cybersecurity Inc](https://reasonsecurity.com).

[![reason logo](https://cdn.reasonsecurity.com/github-assets/reason_signature_logo.png)](https://reasonsecurity.com)

## License

[MIT](LICENSE) © Vincent Weevers
