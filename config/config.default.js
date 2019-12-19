'use strict';
const path = require('path');

/**
 * egg-ts-pay default config
 * @member Config#tsPay
 * @property {String} SOME_KEY - some description
 */
exports.tsPay = {
  wx: {
    appid: '',
    mchid: '',
    partnerKey: '',
    notify_url: '',
    pfx: require('fs').readFileSync('证书文件路径'),
    spbill_create_ip: '127.0.0.1'
  },
  ali: {
    appId: '',
    notifyUrl: '',
    rsaPrivate: path.resolve('./pem/aliPrivate.pem'),
    rsaPublic: path.resolve('./pem/aliPublic.pem'),
    sandbox: false,
    signType: 'RSA2'
  }
};
