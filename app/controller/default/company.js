'use strict';

const Controller = require('egg').Controller;

class CompanyController extends Controller {
  async index() {
    await this.ctx.render("/default/company")
  }
}

module.exports = CompanyController;
