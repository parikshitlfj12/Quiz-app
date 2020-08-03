'use strict'

var mongoose = require('mongoose')

Quiz = mongoose.model('Quiz');
Result = mongoose.model('Result');

exports.list_all_quiz = (req,res) => {
  Quiz.find({} , (err,quiz) => {
    if(err) 
      res.send(err)
    res.json(quiz)
  })
}

exports.create_quiz = (req,res) => {
  var reqquiz = {
    quizname: req.body.quizname,
    author: req.body.author,
    questions: []
  }
  var y = 0
  for (const [key, value] of Object.entries(req.body.problemstatement)) {
    // console.log("for ques", `${key}` +1)
    // console.log(`${key} ${value}`);
    var optioncount = req.body.numberofoptions[`${key}`]
    var index = parseInt(optioncount) + y
    var options = []
    for (y; y < index; y++) {
      options.push(req.body.optionforques[y])
    }

    var obj = {
      que: req.body.problemstatement[`${key}`],
      options: options,
      answer: req.body.answerofques[`${key}`]
    }
    reqquiz.questions.push(obj)
  }
  var new_quiz = new Quiz(reqquiz);
  new_quiz.save(function (err, user) {

    if (err)
        res.send(err);
    res.redirect('http://localhost:8080/user')
});
}

exports.single_quiz = (req,res) => {
  Quiz.findById(req.params.id , (err,quiz) => {
    if(err) 
      res.send(err)
    res.json(quiz)
  })
}

exports.score = (req,res) => {
  Result.find({"quizId": req.params.id} , (err,quiz) => {
    if(err) 
      res.send(err)
    res.json(quiz)
  })
}

exports.submitquiz = (req, res) => {
  var reqarray = Object.values(req.body);
  console.log(reqarray)
  // for (const [key, value] of Object.entries(req.body)) {
  //   console.log(`${value}`)
  // }
  var score = 0
  var totalquestion = 0
  Quiz.findById(req.body.quizid , (err,quiz) => {
    if(err) 
      console.log(err)
    else {
      var answerindex = 1
      quiz.questions.forEach(doc => {
        if (reqarray[answerindex] === doc.answer){
          ++score
        }
        ++answerindex;
      })
      totalquestion = quiz.questions.length
      var obj = {
        Score: score,
        maxScore: totalquestion,
        quizId: req.body.quizid
      }
      var new_score = new Result(obj);
      new_score.save(function (err, user) {
        if (err)
            res.send(err);
        res.redirect('http://localhost:8080/user')
      })
    }
  })
}