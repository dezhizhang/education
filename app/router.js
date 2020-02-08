'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //router.get('/', controller.home.index);
  router.get("/",controller.default.home.index);
  router.get("/index",controller.default.home.index);
  router.get("/company",controller.default.company.index);
};
