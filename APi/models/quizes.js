'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var quizeSchema = new Schema({
  quizname: {
    type: String
  },
  author: {
    type: String
  },
  questions: {
    type: Array 
  }
})

module.exports = mongoose.model('Quiz', quizeSchema);