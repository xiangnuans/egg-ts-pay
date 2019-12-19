'use strict';

const tenpay = require('tenpay');
const bodayParser = require('body-parser');
const alipay = require('egg-alipay');
const moment = require('moment');

module.exports = {
  /**
   * 微信支付
   */
  get wxPay() {
    const isDev = this.config.env === 'pro'
    return new tenpay(this.config.tsPay.wx, isDev);
  },

  /**
   * 支付宝支付
   */
  get aliPay () {
    return new alipay(this.config.tsPay.ali);
  },

  /**
   * 访问参数解析
   * @returns
   */
  get bodyParser () {
    return bodyParser;
  },

  /**
   * xml2js
   * @returns {*}
   */
  get xml2js () {
    return require('xml2js').parseString;
  },

  /**
   * 支付宝签名校验
   * @param req
   * @returns {*}
   */
  aliSignVerify (req) {
    return this.aliPay.signVerify(req);
  },

  /**
   * 微信签名校验
   * @param req
   * @returns {*}
   */
  wxSignVerify (json) {
    return json.sign === this.wxPay._getSign(json, 'MD5');
  },

  /**
   * 生成订单号
   * @param other 其它业务订单号
   * @returns {Promise<string>}
   */
  async createOrderNum (other) {
    const redisNum = await this.redis.send_command('INCR', ['orderNum']);
    if (other) {
      return `${moment().format('YYYYMMDD')}000${redisNum}${other}`;
    }
    return `${moment().format('YYYYMMDD')}000${redisNum}`;
  }
}