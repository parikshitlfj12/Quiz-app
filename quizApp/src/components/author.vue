<template>
  <div class="container mt-5">
    <div class="card" style="width:800px;margin-left:200px">
      <div class="card-header" style="font-weight:bold; font-size:22px">
        Create Your Quiz
      </div>
    </div>
    <div style="width:800px;margin-left:200px">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="POST" action="http://localhost:3000/quizes" id="form1">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="quizname">
            Quiz Name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quizname" name="quizname" type="text" placeholder="Enter name...">
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="numberofques">
            Author Name
          </label>
          <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="author" name='author' type="text" placeholder="Author">
        </div>

        <div class="mt-4" v-for="x, index in questionnumber" :key="x">
          <span class="text-gray-700" style="font-weight:bold; font-size:20px; margin-left:-10px">Question {{x}}</span>
          <div class="mt-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="numberofques">
              Problem Statement
            </label>
            <textarea class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="problemstatement" name='problemstatement' type="text" :placeholder="'Question ' + x" rows="4" cols="50"></textarea>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="numberofques">
              Number of Options
            </label>
            <input v-model="optionarray[index]" class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="numberofoptions" name="numberofoptions" type="number" placeholder="Number of Options">

            
            <div class="mt-4" v-for="optionindex in calculateoptions(optionarray[index])" :key="optionindex">
              <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="options">
                  Option {{optionindex + 1}}
                </label>
                <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id='optionforques' name="optionforques" type="text" placeholder="value">
              </div>
            </div>
            <div class="mt-4">
              <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="options">
                  Correct Answer
                </label>
                <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id='answerofques' name='answerofques' type="text" placeholder="Answer">
              </div>
            </div>
          </div>
        </div>
        <div style="position: absolute; left:61%; margin-top:8px; cursor: pointer">
          <span class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" v-on:click="increment">
            Add Question +
          </span>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" form="form1" value="Submit">
            Submit
          </button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 CodeNex All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'app',
  data () {
    return {
      questionnumber: 0,
      optionarray: [],
      questions: [],
      Quiz: {
        quizname: '',
        authorname: '',
        questions: [
          {

          }
        ]
      }
    }
  },
  methods: {
    increment() { 
      this.questionnumber++;
    },
    calculateoptions(index) {
      var optionslist = []
      if (index > 0){
        for (var i = 0; i < index; i++) {
          optionslist.push(i)
        }
      }
      console.log(optionslist)
      return optionslist
    }
  }
}
</script>

<style>
</style>
