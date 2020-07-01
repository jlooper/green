<template>
	<div id="app">
		<h1>Track your Region's Carbon Usage</h1>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'App',
	created() {
		axios
			.get('https://api.co2signal.com/v1/latest', {
				params: {
					countryCode: 'US-NEISO',
					headers: {
						'auth-token': 'c099158761a3a563',
					},
				},
			})
			.then(function(response) {
				console.log(response);
			});
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
