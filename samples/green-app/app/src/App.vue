<template>
  <div id="app">
    <h1>Track your Region's Carbon Usage</h1>
    <h2>hey</h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      fossilFuelPercentage: "",
      carbonIntensity: "",
      response: {}
    };
  },
  async created() {
    await axios
      .get(
        "https://getcarbonusage.azurewebsites.net/api/getCarbonUsage?region=US-NEISO"
      )
      .then(function(response) {
        console.log(response.data);
        //this.fossilFuelPercentage = res.fossilFuelPercentage;
        //this.carbonIntensity = res.carbonIntensity;
      });
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
  margin-top: 60px;
}
</style>
