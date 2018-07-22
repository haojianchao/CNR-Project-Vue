<template>
    <div class="pro">
    	<mt-navbar v-model="selected">
		  <mt-tab-item id="1">JEWELRY</mt-tab-item>
		  <mt-tab-item id="2">WATCH</mt-tab-item>
		  <!--<mt-tab-item id="3">FITMENT</mt-tab-item>-->
		</mt-navbar>
		
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			    	<v-jewelry></v-jewelry>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			   	 	<v-watch></v-watch>
			  </mt-tab-container-item>
			  <!--<mt-tab-container-item id="3">
			    	<v-fitment></v-fitment>
			  </mt-tab-container-item>-->
		</mt-tab-container>
    </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./style.scss"></style>