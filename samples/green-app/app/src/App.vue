<template>
  <div id="app" :style="background">
    <h1>Current Carbon Intensity: {{carbonIntensity}}</h1>p
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      response: {},
      carbonIntensity: 0,
      background: ""
    };
  },
  async created() {
    try {
      const response = await axios.get(
        "https://getcarbonusage.azurewebsites.net/api/getCarbonUsage?region=US-NEISO"
      );
      this.response = response.data;
      this.carbonIntensity = response.data.carbonIntensity;
      if (this.carbonIntensity <= 100) {
        this.background =
          "background: rgb(0,3,69); background: linear-gradient(0deg, rgba(0,3,69,1) 0%, rgba(99,255,3,1) 100%)";
      } else if (this.carbonIntensity <= 200) {
        this.background =
          "background: rgb(0,3,69); background: linear-gradient(0deg, rgba(0,3,69,1) 0%, rgba(255,250,3,1) 100%)";
      } else if (this.carbonIntensity <= 300) {
        this.background =
          "background: rgb(0,3,69); background: linear-gradient(0deg, rgba(0,3,69,1) 0%, rgba(255,139,0,1) 100%)";
      } else if (this.carbonIntensity > 300) {
        this.background =
          "background: rgb(0,3,69); background: linear-gradient(0deg, rgba(0,3,69,1) 0%, rgba(255,0,0,1) 100%)";
      }
    } catch (error) {
      console.error(error);
    }
  }
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
