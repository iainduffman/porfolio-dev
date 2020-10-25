<template>
  <div id="app" class="app">
  <ul class="nav nav-pills">
  <li class="nav-item">
    <router-link class="nav-link" to="/">Home</router-link>
  </li>
 
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
    
  <transition name="moveInUp" mode="out-in">
  <router-view/>
  </transition>
  </div>
</template>



<script>
export default {
  name: 'App'
}
</script>
<style>
.nav-link {padding-left: 0rem;}

body { background: #000;}
html, body, .app { height: 100% !important; color: #fff;}

.display-1, .display-5, .desc, .nav-link, .img-fluid, h3, h1, .main-image, .backgLayer { 
  opacity: 0;
  position: relative;
  bottom: 0;
  animation: fadeIn 0.8s ease-in-out !important;
  animation-fill-mode: forwards !important;
}


.backgLayer {position: fixed; width: 100%; height: 100%; left: 0px; z-index: -1;}

.backgLayer {
  animation: fadeIn 0.3s ease-in-out !important;
  animation-delay: 0.2s !important;
  animation-fill-mode: forwards !important;
}

.main-image{
  animation-delay: 0.1s !important;
  bottom: -48px;
}

.display-1{
  animation-delay: 0.3s !important;
  bottom: -32px;
}

.display-5{
  animation-delay: 0.7s !important;
  bottom: -24px;
}

.desc {
  animation-delay: 1s !important;
  bottom: -16px;
  color: #666;
}

.nav-link{
  animation-delay: 1.3s !important;
  bottom: -12px;
}


@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  25%{
    opacity: 0;
  }
  100%{
    opacity: 1;
    bottom: 0px;
  }
}

.moveInUp-leave-active{
  animation: fadeOut 1s ease-in-out;
  animation-fill-mode: forwards !important;
}

@keyframes fadeOut{
 0%{
  opacity: 1;
 }
  100%{
  opacity: 0;
 }
}

</style>
