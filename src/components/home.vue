<template>
<transition name="hometrans">
  <div class="home container h-100">
    <h1>{{title}}</h1>
    <div class="row align-items-center h-100">
      <div class="col-md-4 col-lg4" v-for="(data,index) in products" :key="index">
        <img :src="data.image" class="img-fluid">
         <h3 @click="goTodetail(data.productId)" >{{data.productTitle}}</h3>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Home (Placehold)',
      products:[
      {
        productTitle:"ABCN",
        image       : require('../assets/images/product1.png'),
        productId:1
      },
      {
        productTitle:"KARMA",
        image       : require('../assets/images/product2.png'),
        productId:2
      },
      {
        productTitle:"Tino",
        image       : require('../assets/images/product3.png'),
        productId:3
      },
      {
        productTitle:"EFG",
        image       : require('../assets/images/product4.png'),
        productId:4
      },
      {
        productTitle:"MLI",
        image       : require('../assets/images/product5.png'),
        productId:5
      },
      {
        productTitle:"Banans",
        image       : require('../assets/images/product6.png'),
        productId:6
      }
      ]
    }
  },
  methods:{
  goTodetail(prodId) {
    let proId=prodId
    this.$router.push({name:'details',params:{Pid:proId}})
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row img{
  max-height: 15em;
  width: 100%;
}
.row h3{
  cursor:pointer;
}

.home {position: relative;}

.hometrans-enter-active { animation: homefadeIn 0.3s ease-in-out !important; animation-delay: 2s;}

@keyframes homefadeIn{
 0%{
  opacity: 0;
  bottom: -100px;
 }
  100%{
  opacity: 1;
  bottom: 0px;
 }
}

</style>