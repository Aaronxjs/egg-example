'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('', controller.home.index);
  router.get('/addressData', controller.address.index);
  router.get('/getBarData', controller.getBar.index);
  router.get('/getLineData', controller.getLine.index);
  router.get('/getPieData', controller.getPie.index);
  router.get('/getTableData', controller.getTable.index);
  router.get('/getFormData', controller.getForm.index);
};
