import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import {myRequest} from './until/api.js'
Vue.use(uView);

Vue.prototype.$myRequest = myRequest
Vue.config.productionTip = false

//封装登录
Vue.prototype.checkLogin = function(backpage,backtype){
	var SUID = uni.getStorageInfoSync('SUID'); //id
	var SRAND = uni.getStorageInfoSync('SRAND');//随机码
	var SNAME = uni.getStorageInfoSync('SNAME');//name
	var SFACE = uni.getStorageInfoSync('SFACE');//头像
	if(SUID == '' || SRAND == '' ||  SFACE == ''){
		uni.redirectTo({
			url:"/pages/login/login.vue?backpage="+backpage+"&backtype="+backtype
		});
		return false;
	}
	return[SUID,SRAND,SNAME,SFACE]
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
