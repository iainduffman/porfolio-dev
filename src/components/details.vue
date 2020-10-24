<template>
	<div id="appx" class="details">
		<div class="container">
			<div class="row">
				<div class="col-md-12" v-for="(product,index) in products" :key="index"> 
					<div v-if="proId == product.productId">
						<div class="backgLayer" v-bind:style="{backgroundColor: `#${product.productBg}`}"></div>
						<div class="content-wrapper" v-bind:class="product.styleTheme">
						<img :src="product.image" class="main-image img-fluid">
						<h1 class="display-1 mb-2 mt-4">{{product.productTitle}}</h1>
  <h1 class="display-5">This is a short, sharp punchy line</h1>
  <p class="desc mt-4">Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
  <p class="link"><router-link class="nav-link" to="/">Back to Listing</router-link></p>
					</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.light-text h1, .light-text p  { color: #fff !important;}
.dark-text-1 h1, .dark-text-1 p  { color: #000 !important;}
.grey-text-1 h1, .grey-text-1 p  { color: #707070 !important;}
</style>



<script>
export default {
var app = new Vue({
  el: '#appx',
  data: {
    myclass: 'red',
    toggled: true,
  },
  methods: {
    toggle: function() {
      this.toggled = !this.toggled
    }
  }
});}	
}
</script>
<script>
var app = new Vue({
  el: '#appx',
  data: {
    myclass: 'red',
    toggled: true,
  },
  methods: {
    toggle: function() {
      this.toggled = !this.toggled
    }
  }
});}
</script>
<script>
	export default{
		name:'details',
		data(){
			return{
				proId:this.$route.params.Pid,
				title:"details",
				products:[
				{
				productTitle:"ABCN",
                image       : require('../assets/images/product1.png'),
                imageTwo      : require('../assets/images/product2.png'),
                productId:1,
				productDesc:"Header Variable",
				productBg: "202020",
				styleTheme: "light-text"
				},
				{
				productTitle:"KARMA",
				image       : require('../assets/images/product2.png'),
				productId:2,
				productBg: "999999",
				styleTheme: "light-text"
				},
				{
				productTitle:"Tino",
				image       : require('../assets/images/product3.png'),
				productId:3,
				productBg: "660a00",
				productBg: "ccc",
				styleTheme: "grey-text-1"
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
		}
		
	}
</script>