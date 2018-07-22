<template>
    <div>
    	<mt-swipe :auto="4000">
			  <mt-swipe-item v-for="item in jewelryBannerList" :key="item.id">
			  	<img :src="'http://127.0.0.1:5500/'+item.bannerUrl" alt="" />
			  </mt-swipe-item>
		</mt-swipe>
		<mt-cell  v-for="item in jewelryList" :key="item.id"> 
		   <img slot="icon" :src="item.img" width="120" height="120">
		    <span>
			    <p>{{item.brand}}</p>
			  	<p>{{item.price}}</p>
			  	<p>{{item.info}}</p>
		    </span>
		</mt-cell>		
    </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./style.scss"></style>