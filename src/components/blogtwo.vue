<template>
 <div class="container h-100">
  <div class="row align-items-center h-100">
  <div class="col-12 mx-auto">
  <h1>{{blog}}</h1>
  <h1 class="display-1 mb-5">This is an example of a long heading</h1>
  <h1 class="display-5">This is a short, sharp punchy line</h1>
  <p>Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
  <p class="link"><router-link class="nav-link" to="/blog">Services</router-link></p>

  </div>
  </div>
 </div>
</template>
<script>
 export default{
  name:'blogtwo',
  data (){
   return{
    title:'Blogtwo'
   }
  }
 }
</script>
<style scoped>
 
</style>