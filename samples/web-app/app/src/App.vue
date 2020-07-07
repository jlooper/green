<template>
	<div id="app" :style="background">
		<h1>Current Carbon Intensity: {{ carbonIntensity }}</h1>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'App',
	data() {
		return {
			response: {},
			carbonIntensity: 'calculating...',
			background: '',
		};
	},
	async created() {
		try {
			const response = await axios.get(
				'https://getcarbonusage.azurewebsites.net/api/getCarbonUsage?region=US-NEISO'
			);
			this.response = response.data;
			this.carbonIntensity = response.data.carbonIntensity.toFixed(2);
			if (this.carbonIntensity <= 100) {
				//green
				this.background =
					'background: rgb(255,255,255); background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(151,222,107,1) 100%);';
			} else if (this.carbonIntensity <= 200) {
				//yellow
				this.background =
					'background: rgb(255,255,255); background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(236,214,98,1) 100%);';
			} else if (this.carbonIntensity <= 300) {
				//orange
				this.background =
					'background: rgb(255,255,255); background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(242,145,65,1) 100%);';
			} else if (this.carbonIntensity > 300) {
				//red
				this.background =
					'background: rgb(255,255,255); background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(242,85,65,1) 100%);';
			}
		} catch (error) {
			console.error(error);
		}
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
}

html,
body,
div,
h1,
h2 {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	height: 100%;
}
h1 {
	padding-top: 40px;
	font-size: 3em;
}
</style>
