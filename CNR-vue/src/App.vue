<template>
	<div class="container">
			<header>
					<router-view name="header"></router-view>
			</header>
			<div class="content">
					<router-view name="content"></router-view>
			</div>			
			<footer>
					<v-footer></v-footer>
			</footer>
	</div>
</template>

<script>
	import Footer from '@/components/footer/index.vue';
	export default {
	    name: 'App',
	    components: {
	        'v-footer': Footer
	    }
	}
</script>
	
<style lang="scss"></style>
