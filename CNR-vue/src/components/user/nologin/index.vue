<template>
    <div>
    	<mt-navbar v-model="selected">
		  <mt-tab-item id="1">LOGIN</mt-tab-item>
		  <mt-tab-item id="2">REGISTER</mt-tab-item>
		</mt-navbar>
		
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			    	<v-login></v-login>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			   	 	<v-register></v-register>
			  </mt-tab-container-item>
		</mt-tab-container>       
    </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./style.scss"></style>