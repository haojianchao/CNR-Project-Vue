import tools from '@/tools/index.js'
import axios from 'axios'
import {Toast} from 'mint-ui'
import md5 from 'js-md5';

export default {
    name: "index",
    data: function () {
    	return {
    		phoneNum: '',
    		phoneNumState: '',
    		code: '',
    		codeState: '',
    		codeStr: '发送验证码',
    		password: '',
    		passwordState: '',
    		admincode: '',
    		flag: true
    	}
    },
    methods: {
    	sendCode () {
    		axios.get('http://localhost:5500/api/getRegisterPhoneCode?phoneNum='+this.phoneNum)
    				.then( ( res ) => {
    					if ( res.data == '0') {
    						this.phoneNumState = 'warning'
							Toast('该手机号已经注册，请直接登录')
    					} else {
    						this.admincode = res.data.code;
    						console.log(res.data.code)
    						if ( this.flag ) {
    							this.startTime(20)
    						}
    					}
    				})
    				.catch( ( err ) => {
    					console.log(err);
    				})
    	},
    	startTime ( time ) {
    		var timer = setInterval( () => {
    			time--;
    			if ( time == 0 ) {
    				this.codeStr = '发送验证码'
					clearInterval(timer)
    			} else {
    				this.codeStr = time + 's后重新发送';
    				this.flag = false;
    			}
    		}, 1000)
    	},
    	registerAction () {
    		if (this.phoneNumState != 'success') {
				Toast('请确保手机号是正确的')
				return
			}
			if (this.codeState != 'success') {
				Toast('请确保验证码的正确性')
				return
			}
				
			if (this.passwordState != 'success') {
				Toast('请确保密码是有效的')
				return
			}
			// 对密码进行加密
			this.password = md5(this.password)
			axios.post( 'http://127.0.0.1:5500/api/addRegisterPhoneAction', {phoneNum:this.phoneNum, password:this.password })
					.then( (res) => {
						if ( res.data == '1' ) {
							Toast('注册成功');
							//this.$router.push('nologin')
							this.phoneNum = ''
							this.code = ''
							this.password = ''
						} else {
							Toast('注册失败');
						}
					})
					.catch( (err) => {
						if ( err ) throw err;
					})
    	}
    },
    watch: {
    	phoneNum (newVal, oldVal) {
    		if (tools.isPoneAvailable(newVal)) {
		        this.phoneNumState = 'success';
		    } else {
		        this.phoneNumState = 'error';
		    }
		    if (newVal == '') {
		        this.phoneNumState = ''
		    }
    	},
    	code (newVal, oldVal) {
//  		console.log(newVal);
    		if ( newVal.length ==4 ) {
    			this.codeState = 'success';
    		} else {
    			this.codeState = 'error';
    		}
    		if (newVal == '') {
		        this.codeState = ''
		    }
    	},
    	password (newVal, oldVal) {
    		if ( newVal.length >= 6 ) {
    			this.passwordState = 'success';
    		} else {
    			this.passwordState = 'error';
    		}
    		if (newVal == '') {
		        this.passwordState = ''
		    }
    	}
    }
}