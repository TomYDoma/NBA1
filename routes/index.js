var express = require('express');
var router = express.Router();
const {Teams}=require('../models');
const {Players}=require('../models');

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/visitor', function(req, res, next) {
  res.render('visitor', { title: 'Express' });
})
router.get('/players', async function(req, res, next) {
    let players=await Players.findAll();
    console.log(players);
    res.render('players', { title: 'Express', players });
});

router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'Express' });
});
router.get('/teams', async function(req, res, next) {
 let teams=await Teams.findAll();
 console.log(teams);
  res.render('teams', { title: 'Express', teams });
});
router.get('/teamdeteil', function(req, res, next) {
  res.render('teamdeteil', { title: 'Express',  });
});

router.get('/playersdetail', function(req, res, next) {
  res.render('playersdetail', { title: 'Express' });
});


module.exports = router;
