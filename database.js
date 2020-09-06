const Sequelize = require('sequelize')
const dotenv = require("dotenv")
dotenv.config()
const db = new Sequelize(process.env.DATABASE, process.env.USERR, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
    port: 3306,
    operatorsAliases: false,
    pool: {
        max: 8,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})
const User = db.define('User_Os', {
    U_Id: {
        type: Sequelize.STRING,
        allowNULL: true
    },
    username: {
        type: Sequelize.STRING,
        allowNULL: true
    },
    thumbnail: {
        type: Sequelize.STRING,
        allowNULL: true
    }, emailId: {
        type: Sequelize.STRING,
        allowNULL: false
    }
    , authenticationType: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING,
        allowNULL: true
    }, fullname: {
        type: Sequelize.STRING,
        allowNULL: false
    }, salt: {
        type: Sequelize.STRING
    }, authenticationType: {
        type: Sequelize.STRING
    }, valid: {
        type: Sequelize.STRING
    }, password: {
        type: Sequelize.STRING
    },logo: {
        type: Sequelize.STRING
    },
})
const Setting = db.define('setting', {
    userId:Sequelize.INTEGER,
    name:Sequelize.STRING,
    phone:Sequelize.STRING,
    email:Sequelize.STRING,
    website:Sequelize.STRING,
    add:Sequelize.STRING,
    state:Sequelize.STRING,
    country:Sequelize.STRING,
    
})
const Task = db.define('Task_OS',{
    E_Id:Sequelize.INTEGER,
    U_ID:Sequelize.INTEGER,
    name:Sequelize.STRING,
    start:Sequelize.STRING,
    end:Sequelize.STRING,
    duration : Sequelize.INTEGER,
    text:Sequelize.TEXT,
    day:Sequelize.INTEGER,
    fix:Sequelize.INTEGER,
    day:Sequelize.INTEGER,
})
db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database " + err))
exports = module.exports = {
    User,Task,Setting
}