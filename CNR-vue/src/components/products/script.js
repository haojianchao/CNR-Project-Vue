
import axios from 'axios';
import Vue from 'vue';

import Jewelry from '@/components/jewelry/index.vue';
import Watch from '@/components/watch/index.vue';

export default {
    name: "index",
    data: function(){
    	return {
    		selected: "1"
    	}
    },
    components: {
    	'v-jewelry': Jewelry,
    	'v-watch': Watch
    }
}