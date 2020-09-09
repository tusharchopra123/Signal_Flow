const route = require('express').Router()

const Sequelize = require('sequelize')
const path = require('path')
function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}

const authCheck = (req, res, next) => {
  if (isEmpty(req.user)) {
    //user is not logged in
    res.redirect('/login')
  } else {
    
    xid = req.user[0].id
    alreadylogo=req.user[0].logo;
    next()
  }
}
route.get('/logo', authCheck, (req, res) => {
  res.status(200).send(alreadylogo)
})
route.get('/api', authCheck, (req, res) => {
  res.status(200).send(req.user[0]);
})
route.get('/', authCheck, (req, res) => {
  res.sendFile(path.join(__dirname, '../views/signalflow.html'))
})
route.get('/css', (req, res) => {

  res.sendFile(path.join(__dirname, '../css/signalflow.css'))

})
route.get('/style2', (req, res) => {

  res.sendFile(path.join(__dirname, '../css/style2.css'))

})
route.get('/js/jquery',(req,res)=>{
    res.sendFile(path.join(__dirname,'../js/jquery-3.3.1.slim.min.js'));
})
route.get('/js/popper',(req,res)=>{
    res.sendFile(path.join(__dirname,'../js/popper.min.js'));
})
route.get('/js/bootstrap',(req,res)=>{
    res.sendFile(path.join(__dirname,'../js/bootstrap.min.js'));
})
route.get('/js/SignalFlowGraph',(req,res)=>{
    res.sendFile(path.join(__dirname,'../js/SignalFlowGraph.js'));
})
route.get('/js/guiUtilities',(req,res)=>{
    res.sendFile(path.join(__dirname,'../js/guiUtilities.js'));
})
route.get('/js/gui',(req,res)=>{
    res.sendFile(path.join(__dirname,'../js/gui.js'));
})
route.get('/api/dash', authCheck, (req, res) => {
  res.status(200).send([10,2,9,1]);
})


module.exports = route