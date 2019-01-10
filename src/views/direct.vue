<template>
	<div class="container">
		<div class="row">
			<div class="col-sm-6">
				<!-- <h1 class="text-success">JSMPJ CORPORATION</h1> -->
				<h6 class="text-dark bg-warning">This class will use Global Directives</h6>
				<h1 class="bg-success" v-text="'This is v-text Directive'"></h1>
				<h6 v-dr v-html="'<strong>This is html directives</strong>'"></h6>

				<h1 v-dr>We Are Using Global Directives</h1>
                <h1 v-dr1="'red'"> User pass the color value in directive</h1>
                <h1 class="text-dark" v-dr2:background="'green'">Passing arguments in directives</h1>
                <h1 v-dr3:background.delayed="'red'">Adding modiifers in directives</h1>
			</div>


			<div class="col-sm-6">
			<h6 class="text-dark bg-danger">This class will use Local Directives</h6>
             <h1 class="bg-success" v-text="'This is v-text directive'"></h1>
             <h6 v-html="'<strong>This is html directives</strong>'"></h6>
             <h1 v-local-dr>We are using local Directives</h1>
             <h1 v-local-dr1="'red'">User pass color value in directives</h1>
             <h1 v-local-dr2:background="'blue'">passing argumentsin local diectives</h1>
             <h1 v-local-dr3:background.delayed="'red'">Adding Modifiers in Directives</h1>
			</div>
		</div>
	</div>
</template>

<script>
export default{
     directives:{
	      'local-dr':{
	      	bind(el,binding,vnode){
             el.style.backgroundColor='green';

	      	}
	      },
	      'local-dr1':{
	      	bind(el,binding,vnode){
	      		el.style.backgroundColor=binding.value;
	      	}
	      },
          'local-dr2':{
          	bind(el,binding,vnode){
          		if(binding.arg == 'background'){
          			el.style.backgroundColor=binding.value;
          		}
          		else{
          			el.style.color=binding.value;
          		}
          	}
          },
          'local-dr3':{
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
          }
        }
}

</script>

<style>
	

</style>