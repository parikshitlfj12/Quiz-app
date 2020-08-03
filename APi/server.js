var express = require('express')
app = express();
var mongoose = require('mongoose')
Quiz = require('./models/quizes')
Result = require('./models/result')
var bodyParser = require('body-parser')
var cors = require('cors')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/codenx')

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
var route = require('./routes/quiz')
route(app);

port = process.env.PORT || 3000
app.listen(port)


console.log('user list')