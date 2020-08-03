<template>
  <div class='container mt-3'>
    <div class="card">
      <div class="card-header">
        Welcome To CodeNx Sample Quiz Project
      </div>
      <div class="card-body">
        <h5 class="card-title">Divided into two section- Author/User</h5>
        <p class="card-text"><b>Author -</b> Create your own quiz, set answers for them and let people solve them.
        <br>
        <b>User -</b> Try Mock Quizzes and improve your skills. Get your report card too.</p>
        <a href="http://localhost:8080/author" class="mt-3 btn btn-secondary">Author - Create Your Own Quiz</a><br>
        <a href="http://localhost:8080/user" class="btn btn-secondary mt-3">User - Try A Sample Quiz Now</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
