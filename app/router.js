'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //router.get('/', controller.home.index);
  router.get("/",controller.home.index);
  router.get("/index",controller.home.index);
  router.get("/about",controller.about.index);
  router.get("/blog",controller.blog.index);
  router.get("/classes",controller.classes.index);

};
