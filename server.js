const express =  require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT || 5000

//CONNECT TO DATABASE
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true

},  () => {
    console.log('db connected');
})

const db = mongoose.connection

db.on('connected', () => {
        console.log('mongoose connected to', MONGODB_URI);      
})

db.on('disconnected', () => {
    console.log('mongoose disconnect to', MONGODB_URI);
})

db.on('error', (error) => {
    console.log('mongoose error', error);
})

//MIDDLEWARE
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(upload.any());

//CONTROLLERS
const productsController = require('./controllers/productsController')
app.use('/products', productsController)
app.get("/new", (req, res) => {
    try {
      res.render("new.ejs");
    } catch (err) {
      res.send(err);
    }
  });


//LISTENER

app.listen(PORT, () =>{
    console.log('LISTEN ON PORT:', PORT);
})