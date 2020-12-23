<template>
  <div class="card-wrapper">
    <div class="temp">{{ convertTemp(temp, undefined, 0) + "°" }}</div>
    <img :src="source" loading="lazy" />
    <div class="weekday">{{ weekday }}</div>
  </div>
</template>

<script>
import mixins from "@/mixins/mixins.js";
import { weatherStateHelper } from "@/helpers/weatherStateHelper.js";

export default {
  name: "Card",
  props: {
    weather: Object,
  },

  computed: {
    temp: function () {
      return this.weather.temp.day || this.weather.temp;
    },
    source: function () {
      return weatherStateHelper[this.weather.weather[0].icon].asset;
    },
    weekday: function () {
      return new Date(this.weather.dt * 1000).toLocaleDateString("en-US", {
        weekday: "long",
      });
    },
  },

  mixins: [mixins],
};
</script>

<style scoped lang="scss">
.card-wrapper {
  background-color: rgba(148, 148, 148, 0.507);
  margin: 3px;
  border-radius: 3px;
}

.temp {
  padding: 6px;
}

.weekday {
  @include super-center();
  @include font-size(0.5);
}

img {
  @include super-center();
}

@media (min-width: 1080px) {
  .card-wrapper {
    height: 150px;
    width: 100px;
  }
}
</style>