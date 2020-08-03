<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-header" style="font-weight:bold; font-size:20px">
        All Quizzes
      </div>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Quiz Name</th>
          <th scope="col">Author</th>
          <th scope="col">Number of Questions</th>
          <th scope="col">Action</th>
          <th scope="col">Status</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="single_quiz in Quizes">
          <th scope="row">{{single_quiz.quizname}}</th>
          <td>{{single_quiz.author}}</td>
          <td>{{single_quiz.questions.length}}</td>
          <td>
            <button class="btn btn-sm btn-primary" v-on:click="singlequizredirect(single_quiz._id)">Take Quiz</button>
          </td>
          <td><button type="button" class="btn btn-success btn-sm" v-on:click="checkscore(single_quiz._id)">Check Score</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data () {
    return {
      Quizes: []
    }
  },
  methods: {
    singlequizredirect(id) {
      window.location.href = "http://localhost:8080/user/quiz/" + id ;
    },
    checkscore(id) {
      window.location.href = "http://localhost:8080/user/score/" + id ;
    }
  },
  mounted() {
    axios.get('http://localhost:3000/quizes')
    .then(res => {
      console.log(res.data)
      this.Quizes = res.data
    })
    .catch(err => {
      console.log(err)
    })
  }
}
</script>

<style>
</style>
