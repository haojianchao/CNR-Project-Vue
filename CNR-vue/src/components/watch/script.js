import axios from 'axios';
import Vue from 'vue';
import { mapState } from 'vuex';

export default {
    name: "index",
    data () {
    	return {

    	}
    },
    methods: {
    	getBannerData () {
    		return axios.get('http://localhost:5500/api/getBannerWatch');
    	},
    	getWatchData () {
    		return axios.get('http://localhost:5500/api/watchRoute');
    	}
    },
    computed: mapState(['watchList', 'watchBannerList']),
    mounted () {
    	axios.all( [ this.getBannerData(),  this.getWatchData() ] )  
    			.then( axios.spread( (bannerdata, watchdata) => {  

      				this.$store.commit('watchBannerList', bannerdata.data)
      				this.$store.commit('watchList', watchdata.data)
    	}))
    }
}