<template>
  <div class='container-fluid'>
    <div class="card">
      <div class="card-header" style="font-weight:bold; font-size:22px">
        Your Score Board
      </div>
    </div>
    <div class="card mt-5" style=width:70%>
      <div class="card-header" style="font-size:25px; font-weight:bold">
        Score Statistics
      </div>
      <div class="card-body row">
        <div class='col' style="padding-left:100px">
          <h1 style="font-size:20px; font-weight:500; padding-right:20%; padding-top:40px; margin-bottom:10px">Percentage: {{percentage}}%</h1>
          <span class="badge badge-secondary" style="font-size:18px; font-weight:500; margin-bottom:10px">Correctly answer: {{score.Score}}</span><br>
          <span class="badge badge-secondary" style="font-size:18px; font-weight:500">Total Questions: {{score.maxScore}}</span>
        </div>
        <div class='col'><div style="width:200px; height:200px"><img src="../assets/chart.jpg" width></div></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      id: this.$route.params.id,
      score: [],
      percentage: ''
    }
  },
  mounted() {
    axios.get('http://localhost:3000/score/'+this.$route.params.id)
    .then(res => {
      this.score = res.data[0]
      var x = res.data[0].Score/res.data[0].maxScore*100;
      this.percentage = x.toFixed(2)
    })
    .catch(err => {
      console.log(err)
    })
  }
}
</script>

<style>
</style>
