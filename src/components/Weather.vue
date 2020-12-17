<template>
  <div class="wrapper">
    <Location-input />
    <div class="current">
      <Main />
      <Secondary />
    </div>
  </div>
</template>

<script>
import Main from "@/components/Main.vue";
import Secondary from "@/components/Secondary.vue";
import LocationInput from "@/components/LocationInput.vue";

export default {
  name: "Weather",
  components: {
    Main,
    Secondary,
    LocationInput
  },

  created: function () {
    window.navigator.geolocation.getCurrentPosition(this.getWeatherByCoords);
  },

  computed: {
    name() {
      return this.$store.state.main.name;
    },
  },

  methods: {
    getWeatherByCoords(geolocationPosition) {
      const {
        coords: { latitude: lat, longitude: lon },
      } = geolocationPosition;

      this.$store.dispatch("getWeather", { lat, lon });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input-wrapper {
  @include super-center();
  height: 10vh;
}

.current {
  display: grid;
  // For responsive design, will do 2 x 1 grid when width is over 1080px
  grid-template-columns: repeat(auto-fit, minmax(540px, 1fr));
  height: Min(50vh, 50vw);
  background-color: red;
}
</style>
