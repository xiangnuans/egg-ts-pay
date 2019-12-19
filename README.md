# egg-ts-pay

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-ts-pay.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-ts-pay
[travis-image]: https://img.shields.io/travis/eggjs/egg-ts-pay.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-ts-pay
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-ts-pay.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-ts-pay?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-ts-pay.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-ts-pay
[snyk-image]: https://snyk.io/test/npm/egg-ts-pay/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-ts-pay
[download-image]: https://img.shields.io/npm/dm/egg-ts-pay.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-ts-pay

<!--
Description here.
-->

## Install

```bash
$ npm i egg-ts-pay --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.tsPay = {
  enable: true,
  package: 'egg-ts-pay',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.tsPay = {
};
```

## egg-ts-pay的拓展功能

- wxPay 微信支付， [查看更多API](https://www.npmjs.com/package/tenpay)
- alipay 支付宝支付， [查看更多API](https://www.npmjs.com/package/egg-alipay)
- bodyParser 参数解析
- xml2js xml转换
- aliSignVerify 支付宝签名校验
- wxSignVerify 微信签名校验
- createOrderNum 创建唯一订单号，基于redis，支持高并发

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
