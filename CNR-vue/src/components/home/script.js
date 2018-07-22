import axios from 'axios';
import Vue from 'vue';
import { mapState } from 'vuex';

export default {
    name: "index",
    data () {
	      return {
			
	      }
    },
    computed: mapState(['jewelryList', 'watchList'])	
}