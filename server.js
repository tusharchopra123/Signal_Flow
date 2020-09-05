const express = require('express');
const SERVER_PORT=process.env.PORT || 3420
const path=require('path')
const app = express();
const authroutes = require('./routes/auth-routes').route
const passportSetup = require('./config/passport-setup')
const cookieSession = require('cookie-session')
const passport = require('passport')
const dotenv = require("dotenv")
dotenv.config()
const profileroutes = require('./routes/profile-routes').route

app.use(cookieSession({
    maxAge:2*60*60*1000,
    keys:[process.env.cookieKey]
}))
//initialoze passport
app.use(passport.initialize())
app.use(passport.session())


app.set('views', path.join(__dirname, 'views/'));
app.use((req, res, next) => {
    next()
})

  
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/',require('./routes/api').route)
app.use('/login', require('./routes/login'));
app.use('/dashboard', require('./routes/dashboard'));
app.use('/navbar2', require('./routes/navbar2'));
app.use('/images', require('./routes/images'));

app.listen(SERVER_PORT, function () {
    console.log("Server started on https://...herokuapp.com/");
});



//set up routes
app.use('/auth',authroutes)
app.use('/profile',profileroutes)
app.get('/success',(req,res)=>{
    res.sendStatus(200);
})
//taskkill/f /im node.exe