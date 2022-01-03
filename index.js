const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

const Sequelize = require("sequelize")


// Config
// template engine 
const hbs = handlebars.create({
    defaultLayout: "main"
})
app.engine('handlebars', () => hbs)
app.set('view engine', 'handlebars');

//conexion DB

const sequelize = new Sequelize('teste', 'root', '92318491', {
    host: '172.17.0.2',
    dialect: 'mysql'
})


app.get('/cad', function (req, res) {
    res.render('formularios')
})





app.listen(8081, () => {
    console.log('Server is running on port 8081');
})
