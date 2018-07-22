import tools from '@/tools/index.js'
import axios from 'axios'
import {Toast} from 'mint-ui'

export default {
    name: "index",
    data () {
    	return {
    		phoneNum: '',
    		phoneNumState: '',
    		password: '',
    		passwordState: ''
    	}
    },
    methods: {
    	loginAction () {
    		if (this.phoneNumState != 'success') {
				Toast('请确保手机号是正确的')
				return
			}
    		if (this.passwordState != 'success') {
				Toast('请确保密码是有效的')
				return
			}
    		axios.get( 'http://localhost:5500/api/getLoginMsg?phoneNum='+this.phoneNum)
    				.then( (res) => {
    					if ( res.data.phoneNum == this.phoneNum ) {
    						if ( res.data.password == this.password ) {
    							Toast('登录成功')
    							this.$router.push('loging')
    						} else {
    							Toast('密码错误')
    						}
    					} else {
    						Toast('手机号错误')
    					}
    				})
    				.catch( (err) => {
    					if ( err ) throw err;
    				})
    	}
    },
    watch: {
    	phoneNum (newVal, oldVal ) {
    		if ( tools.isPoneAvailable(newVal)) {
    			this.phoneNumState = 'success';
    		} else {
    			this.phoneNumState = 'err';
    		}
    	},
    	password ( newVal, oldVal ) {
    		console.log(newVal.length)
    		if ( newVal.length > 6 ) {
    			this.passwordState = 'success';
    		} else {
    			this.passwordState = 'error';
    		}
    	}
    }
}