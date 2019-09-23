var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET tasks page. */
router.get('/tasks-page', function(req, res, next) {
  res.render('tasks', { title: 'Express' });
});

/* GET Messages page. */
router.get('/messages-page', function(req, res, next) {
  res.render('messages', { title: 'Express' });
});

/* GET Messages page. */
router.get('/users-page', function(req, res, next) {
  res.render('users', { title: 'Express' });
});

/* GET Messages page. */
router.get('/catalog-page', function(req, res, next) {
  res.render('catalog', { title: 'Express' });
});

/* GET Messages page. */
router.get('/orders-list-page', function(req, res, next) {
  res.render('orders-list', { title: 'Express' });
});

/* GET Messages page. */
router.get('/order-page', function(req, res, next) {
  res.render('order', { title: 'Express' });
});



module.exports = router;
