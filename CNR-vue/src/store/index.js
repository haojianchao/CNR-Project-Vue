import Vue from 'vue'
// import Vuex from 'vuex'
import Vuex, {Store} from 'vuex'

Vue.use(Vuex)

// const store = new Vuex.Store()
const store = new Store({
  state: {  // 所有组件用到的状态统一在这里设置----- 初始数据--将原先组件中data定义的数据移到这里---组件中可以通过this.$store.state.count获取
    jewelryList: [],   
    jewelryBannerList: [],
    watchList:[],
    watchBannerList: [],
    logo: []
  },
  mutations: { // 改变状态的地方，一般不做复杂的业务逻辑，组件可以通过this.$store.commit('changeList',data)----第二个参数为传递的值，第一个参数表示你执行哪一个改变状态的方法
  	JewelryList (state, data){
  		state.jewelryList = data
  	},
  	jewelryBannerList(state, data){
  		state.jewelryBannerList = data
  	},
  	watchList(state, data){
  		state.watchList = data
  	},
  	watchBannerList(state, data){
  		state.watchBannerList = data
  	},
  	getLogo(state, data){
  		state.logo = data
  	}
 }
})

export default store
