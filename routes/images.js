const route = require('express').Router()
const path = require('path')
route.get('/loading', (req, res) => {
  res.sendFile(path.join(__dirname, '../Images/Loading2.gif'))
})
route.get('/emp_man', (req, res) => {
  res.sendFile(path.join(__dirname, '../Images/emp_man.jpg'))
})
route.get('/qr', (req, res) => {
  res.sendFile(path.join(__dirname, '../Images/QR.png'))
})
route.get('/emp_fem', (req, res) => {
  res.sendFile(path.join(__dirname, '../Images/emp_fem.jpg'))
})
route.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, '../Images/profile.jpg'))
})
route.get('/logo', (req, res) => {
  res.sendFile(path.join(__dirname, '../Images/loader.gif'))
})
route.get('/lock', (req, res) => {
  res.sendFile(path.join(__dirname, '../Images/lock.png'))
})
route.get('/signal', (req, res) => {
  res.sendFile(path.join(__dirname, '../Images/signal.jpg'))
})
route.get('/left', (req, res) => {
  res.sendFile(path.join(__dirname, '../Images/left.png'))
})
route.get('/middle', (req, res) => {
  res.sendFile(path.join(__dirname, '../Images/middle.jpg'))
})
route.get('/right', (req, res) => {
  res.sendFile(path.join(__dirname, '../Images/right.jpg'))
})
route.get('/Example1.jpg',(req,res)=>{
  res.sendFile(path.join(__dirname, '../Images/Example1.jpg'))
})
route.get('/Example2.jpg',(req,res)=>{
  res.sendFile(path.join(__dirname, '../Images/Example2.jpg'))
})
route.get('/Example3.jpg',(req,res)=>{
  res.sendFile(path.join(__dirname, '../Images/Example3.jpg'))
})
module.exports = route