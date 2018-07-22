import axios from 'axios';
import Vue from 'vue';
import { mapState } from 'vuex';

export default {
    name: "index",
    data(){
    	return {
    		
    	}
    },
    methods: {
    	getLogo () {
    		return axios.get('http://localhost:5500/api/getLogo');
    	}
    },
    computed: mapState(['logo']),
    mounted () {
    	axios.all( [ this.getLogo() ] )  
    			.then( axios.spread( (logo) => {  
      				this.$store.commit('getLogo', logo.data)
      				console.log(logo.data)
    	}))
    }
}