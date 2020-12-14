<template>
  <div class="hello"></div>
</template>

<script>
export default {
  name: "Weather",
  props: {
    msg: String,
  },

  created: function () {
    window.navigator.geolocation.getCurrentPosition(this.getWeatherByCoords);
  },

  methods: {
    getWeatherByCoords(geolocationPosition) {
      const {
        coords: { latitude: lat, longitude: lon },
      } = geolocationPosition;

      this.$store.dispatch("getWeatherByCoords", { lat, lon });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
