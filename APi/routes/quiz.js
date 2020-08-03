'use strict'

module.exports = app => {
  var quiz = require('../controllers/quizcontroller')
  app.route('/quizes') 
    .get(quiz.list_all_quiz)
    .post(quiz.create_quiz)

  app.route('/quiz/:id') 
    .get(quiz.single_quiz)

  app.route('/submitquiz')
    .post(quiz.submitquiz)
  app.route('/score/:id')
    .get(quiz.score)
}