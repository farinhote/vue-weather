<template>
  <div class="wrapper">
    <Location-input />
    <Background />
    <div v-if="name" class="current-weather">
      <Main />
      <Secondary />
    </div>
    <div v-if="name" class="card-lists">
      <Additional />
    </div>
    <div v-else-if="!invalidLocation" class="loader"></div>
    <div v-if="invalidLocation" class="invalid-location">Choose a Location</div>
  </div>
</template>

<script>
import Main from "@/components/Main.vue";
import Secondary from "@/components/Secondary.vue";
import LocationInput from "@/components/LocationInput.vue";
import Additional from "@/components/Additional.vue";
import Background from "@/components/Background.vue";

export default {
  name: "Weather",
  components: {
    Main,
    Secondary,
    LocationInput,
    Additional,
    Background,
  },

  created: function () {
    window.navigator.geolocation.getCurrentPosition(this.getWeatherByCoords);
  },

  computed: {
    name() {
      return this.$store.state.main.name;
    },
    invalidLocation() {
      return this.$store.state.invalidLocation;
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

.current-weather {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.card-lists {
  padding-top: 2rem;
}

.invalid-location {
  @include super-center();
  @include font-size(2);

  padding-top: 20vh;
}

@media (max-width: 1080px) {
  .current-weather {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
}
</style>
