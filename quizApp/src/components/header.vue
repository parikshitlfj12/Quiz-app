<template>
    <nav class="flex items-center justify-between flex-wrap bg-gray-900 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
        <a class="font-semibold text-xl tracking-tight" href="http://localhost:8080">CodeNx Sample Quiz</a>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="http://localhost:8080/user" style="margin-left:30px; padding-top:-50px; font-size:18px; font-weight:400;margin-right:10px; color:white">
            User
          </a>
          <a href="http://localhost:8080/author" style="padding-top:-50px; font-size:18px; font-weight:400;margin-right:10px; color:white">
            Author
          </a>
          <a href="#" style="padding-top:-50px; font-size:18px; font-weight:400;margin-right:10px; color:white">
            Contact Us
          </a>
          <a href="#" style="padding-top:-50px; font-size:18px; font-weight:400;margin-right:10px; color:white">
            FAQs
          </a>
          <a href="#" style="padding-top:-50px; font-size:18px; font-weight:400;margin-right:10px; color:white">
            About Us
          </a>
        </div>
        <div style="margin-top:-20px">
          <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" style="font-size:15px; font-weight:400 color:white">LogOut</a>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style>
</style>
