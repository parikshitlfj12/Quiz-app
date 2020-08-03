<template>
  <div>
    <myheader></myheader>
    <router-view></router-view>
  </div>
</template>

<script>
import Myheader from "./components/header.vue"
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    'myheader': Myheader
  }
}
</script>

<style>
</style>
