<template>
  <div class="card-wrapper">
    <div>{{ convertTemp(temp, undefined, 0) }}</div>
    <img :src="source" loading="lazy" />
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

img {
  max-width: calc(100% -  1rem);
  max-height: calc(100% -  1rem);
  margin: auto 0;
}
</style>