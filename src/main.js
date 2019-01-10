import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
Vue.config.productionTip = false
Vue.directive('dr', {
 bind(el,binding,vnode){
        el.style.backgroundColor='green';
 }
});

Vue.directive('dr1', {
bind(el,binding,vnode){
	el.style.backgroundColor=binding.value;
}
});

Vue.directive('dr2' , {
bind(el,binding,vnode){
	if(binding.arg == 'background'){
		el.style.backgroundColor=binding.value;
	}
	else{
		el.style.color=binding.value;
	}
}
});

Vue.directive('dr3', {
bind(el,binding,vnode){
	var delay=0;
	if(binding.modifiers['delayed']){
		delay=3000;
	}
	setTimeout(() => {
			if(binding.arg == 'background'){
		el.style.backgroundColor=binding.value;
	}
	else{
		el.style.color=binding.value;
	}
}, delay);
}
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
