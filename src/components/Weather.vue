<template>
  <div class="wrapper">
    <Location-input />
    <div v-if="name" class="current-weather">
      <Main />
      <Secondary />
    </div>
    <div v-else class="loader"></div>
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
    LocationInput,
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
@include loading-spinner();

.input-wrapper {
  @include super-center();
  height: 10vh;
}

.current-weather {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 1080px) {
  .current-weather {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
}
</style>
