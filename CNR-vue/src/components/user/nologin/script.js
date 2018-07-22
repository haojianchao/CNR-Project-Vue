import axios from 'axios';
import Vue from 'vue';

import Login from '@/components/login/index.vue';
import Register from '@/components/register/index.vue';

export default {
    name: "index",
    data: function(){
    	return {
    		selected: "1"
    	}
    },
    components: {
    	'v-login': Login,
    	'v-register': Register
    }
}