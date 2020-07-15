<template>
	<div id="app" :style="background">
		<div v-if="loading" class="emoji-container">
			<p role="img" class="blowing-leaf" aria-label="Blowing leaf Emoji">🍃</p>
		</div>
		<h1 v-else>Current Carbon Intensity: {{ carbonIntensity }}</h1>
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
			loading: false,
			region: 'FR',
		};
	},
	async created() {
		this.loading = true;
		this.region = this.$route.query.region;
		try {
			const response = await axios.get('/api/getCarbonUsage?region=' + this.region + '');
			this.response = response.data;
			if (this.response !== null) {
				this.loading = false;
			}
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
h1 {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	width: 100%;
	height: 100%;
}
h1 {
	padding-top: 40px;
	font-size: 3em;
}

/*https://codepen.io/stevenmacdougall/pen/ZEboRXo*/
p {
	font-size: 50px;
}

.emoji-container {
	height: 100px;
	width: 100px;
	display: inline-block;
}

/* Blowing leaf animation */
.emoji-container .blowing-leaf {
	-webkit-animation-name: blowing-leaf-animation;
	animation-name: blowing-leaf-animation;
	-webkit-animation-duration: 0.7s;
	animation-duration: 0.7s;
	-webkit-animation-iteration-count: infinite;
	animation-iteration-count: infinite;
	display: inline-block;
}
@-webkit-keyframes blowing-leaf-animation {
	0% {
		-webkit-transform: translate(0px, 0px) rotate(0deg);
		transform: translate(0px, 0px) rotate(0deg);
	}
	50% {
		-webkit-transform: translate(30px, 10px) rotate(180deg);
		transform: translate(30px, 10px) rotate(180deg);
	}
	100% {
		-webkit-transform: translate(0px, 0px) rotate(360deg);
		transform: translate(0px, 0px) rotate(360deg);
	}
}

@keyframes blowing-leaf-animation {
	0% {
		-webkit-transform: translate(0px, 0px) rotate(0deg);
		transform: translate(0px, 0px) rotate(0deg);
	}
	50% {
		-webkit-transform: translate(30px, 10px) rotate(180deg);
		transform: translate(30px, 10px) rotate(180deg);
	}
	100% {
		-webkit-transform: translate(0px, 0px) rotate(360deg);
		transform: translate(0px, 0px) rotate(360deg);
	}
}
</style>
