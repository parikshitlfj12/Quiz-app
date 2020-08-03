<template>
<div>
  <div class="card">
      <div class="card-header" style="font-weight:bold; font-size:22px">
        1. Quiz - {{quiz.quizname}}
      <span style="font-size:16px;font-weight:400; float:right"><i>~By Mr. {{quiz.author}}</i></span>
      </div>
    </div>
  <b-container class="bv-example-row mt-5">
    <b-row class="mb-5">
      <b-col cols="5" style="border: 1px solid;padding-top:20px;border-radius:20px ;box-shadow: 5px 10px 10px #888888;">
        <div class="md:flex md:items-center mb-8">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
              Quiz Name:
            </label>
          </div>
          <div class="md:w-2/3">
            {{quiz.quizname}}
          </div>
          
        </div>
        <div class="md:flex md:items-center mb-6" style="margin-top:-20px">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
              Author Name:
            </label>
          </div>
          <div class="md:w-2/3">
            {{quiz.author}}
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>

  <b-container>
    <form method="POST" action="http://localhost:3000/submitquiz" id="form1">
    <input type="hidden" name="quizid" :value="id">
    <div class="mt-4" v-for="question, index in quiz.questions">
      <span class="text-gray-700"><b>Question {{index+1}}</b></span> - 
      <span class="text-gray-700">{{question.que}}</span>
      <div class="mt-2" v-for="option in question.options">
        <label class="inline-flex items-center">
          <input type="radio" class="form-radio" :name="'selected' + index" :value="option">
          <span class="ml-2">{{option}}</span>
        </label>
      </div>
    </div>
    <button class="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5" type="submit" form="form1" value="Submit">
      Submit Test
    </button>
    </form>
  </b-container>



</div>

</template>

<script>
import axios from 'axios';
export default {
  mounted() {
    axios.get('http://localhost:3000/quiz/'+this.$route.params.id)
    .then(res => {
      console.log(res.data)
      this.quiz = res.data
    })
    .catch(err => {
      console.log(err)
    })
  },
  data () {
    return {
      id: this.$route.params.id,
      quiz: []
    }
  }
}
</script>

<style>
</style>
