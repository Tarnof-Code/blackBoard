var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
const { aggregate } = require('../models/articles');
var articleModel = require("../models/articles");
var orderModel = require("../models/orders");
var userModel = require("../models/users");


/* GET home page. */
router.get('/',async function(req, res, next) {
  let empty = await articleModel.find({stock: 0 })
  let countEmpty = empty.length
 
  let admin = await userModel.findById("5c52e4efaa4beef85aad5e52")
  let unread = admin.messages.filter(e => e.read == false)
  let countUnread = unread.length

  let closed = admin.tasks.filter(e => e.dateCloture !== null)
  let countClosed = closed.length


  
 

  res.render('index', {empty, countEmpty, countUnread,countClosed});
});

/* GET tasks page. */
router.get('/tasks-page',async function(req, res, next) {
  let taskAdmin = await userModel.findById("5c52e4efaa4beef85aad5e52")
  // console.log(taskAdmin.tasks);
  res.render('tasks', {taskAdmin: taskAdmin.tasks});
});

/* GET Messages page. */
router.get('/messages-page',async function(req, res, next) {
  let msgAdmin = await userModel.findById("5c52e4efaa4beef85aad5e52")
  // console.log(msgAdmin.messages);
  res.render('messages', {msgAdmin: msgAdmin.messages});
});

/* GET Users page. */
router.get('/users-page',async function(req, res, next) {
  let users = await userModel.find({status: "customer" })
  // console.log(users)
  
  

  res.render('users', {users});
});

/* GET Catalog page. */
router.get('/catalog-page',async function(req, res, next) {
  let catalog = await articleModel.find()
  // console.log('ok')
  // console.log(catalog[0])
    res.render('catalog', {catalog: catalog});

});

/* GET Orders-list page. */
router.get('/orders-list-page', async function(req, res, next) {
  let orders = await orderModel.find()
  res.render('orders-list', {orders});
});

/* GET Order detail page. */
router.get('/order-page',async function(req, res, next) {
  let article = await orderModel.findById(req.query.id).populate("articles").exec();
  // console.log("Wesh " + article)
  res.render('order', {article});
  
});

/* GET chart page. */
router.get('/charts', async function(req, res, next) {
  let users = await userModel.find()
  let menNumber = 0
  let womenNumber = 0

  for(i of users) {
    if(i.gender == "male"){
      menNumber ++
    } else if (i.gender == "female"){
      womenNumber ++
    }
  }

  let admin = await userModel.findById("5c52e4efaa4beef85aad5e52")
  let unread = admin.messages.filter(e => e.read == false)
  let nonLusNumber = unread.length
  let read = admin.messages.filter(e => e.read == true)
  let lusNumber = read.length

  // console.log(lusNumber)
  // console.log(nonLusNumber)


  let exp = await orderModel.find({status_shipment: true, status_payment: "validated"})
  let nonExp = await orderModel.find({status_shipment: false, status_payment: "validated"})

  let aggregate = orderModel.aggregate();
  aggregate.match({"status_payment" : "validated"})

  aggregate.group({
    _id: {
      month: {$month: "$date_payment"}
    },
      total : {$sum: "$total" },
      shipping : {$sum: "$shipping_cost"}
  });

  let turnover = await aggregate.exec()
  console.log(turnover)

 




  res.render('charts', {users, menNumber, womenNumber, nonLusNumber, lusNumber, expNumber: exp.length, nonExpNumber: nonExp.length, turnover});
});



module.exports = router;
