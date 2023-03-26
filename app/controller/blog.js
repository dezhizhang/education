'use strict';

const Controller = require('egg').Controller;

class CompanyController extends Controller {
  async index() {
    await this.ctx.render("/blog")
  }
}

module.exports = CompanyController;
