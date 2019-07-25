'use strict';

const Controller = require('egg').Controller;
const dataJson = require('../public/data.json');
class BarController extends Controller {
  async index() {
    const { ctx } = this;
    const data = await this.getData();
    ctx.body = {
      errno: 0,
      massage: 'success',
      data,
    };
  }
  async getData() {
    return dataJson.bar;
  }
}

module.exports = BarController;
