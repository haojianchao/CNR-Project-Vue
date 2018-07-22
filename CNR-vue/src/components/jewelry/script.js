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
    		return axios.get('http://localhost:5500/api/getBannerJewelry');
    	},
    	getJewelryData () {
    		return axios.get('http://localhost:5500/api/jewelryRoute');
    	}
    },
    computed: mapState(['jewelryList', 'jewelryBannerList']),
    mounted () {
    	axios.all( [this.getBannerData(), this.getJewelryData() ] )
    			.then( axios.spread( (bannerdata, jewelrydata ) => {
    				this.$store.commit('jewelryBannerList', bannerdata.data)
    				this.$store.commit('JewelryList', jewelrydata.data)
    			}))
    }
}