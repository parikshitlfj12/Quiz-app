'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var resultSchema = new Schema({
  Score: {
    type: String
  },
  quizId: {
    type:String,
    default: null
  },
  maxScore: {
    type: String
  },
})

module.exports = mongoose.model('Result', resultSchema);