<template>
  <fragment>
    <label :click="greet" for="toggle">Press for extra info</label>
    <input type="checkbox" id="toggle" />

    <div class="secondary togglable">
      <div class="cell wind">
        <img
          class="arrow"
          :style="{ transform: 'rotate(' + windDeg + 'deg)' }"
          src="@/assets/secondary/north.svg"
          loading="lazy"
        />
        <div class="speed">Wind: {{ secondary.wind.speed }} km/h</div>
      </div>
      <div class="cell sunrise-set">
        <img src="@/assets/secondary/sunrise.svg" loading="lazy" />
        <div class="speed">Sunrise: {{ getHour(secondary.sunrise) }}</div>
        <div class="speed">Sunset: {{ getHour(secondary.sunset) }}</div>
      </div>
      <div class="cell humidity">
        <img src="@/assets/secondary/humidity.svg" loading="lazy" />
        <div class="speed">Humidity: {{ secondary.humidity }}%</div>
      </div>
      <div class="cell pressure">
        <img src="@/assets/secondary/barometer.svg" loading="lazy" />
        <div class="speed">Pressure: {{ secondary.pressure }}hPa</div>
      </div>
    </div>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import mixins from "@/mixins/mixins.js";

export default {
  name: "Secondary",
  mixins: [mixins],
  components: {
    Fragment,
  },

  computed: {
    secondary() {
      return this.$store.state.secondary;
    },
    windDeg() {
      return this.secondary.wind.deg;
    },
  },
};
</script>

<style scoped lang="scss">
.secondary {
  @include super-center();
  @include side-by-side();
}

.cell {
  img {
    max-width: 40%;
    max-height: 40%;
  }
  @include font-size(1.2);
  text-align: center;
}

label, input {
  display: none;
}

@media (max-width: 1080px) {
  .cell {
    grid-gap: 2rem;
  }

  label {
    display: block;
    background: #a5d6a7;
    padding: 0.5rem 1rem;
    width: 100vw;
  }

  #toggle ~ .togglable {
    visibility: hidden;
    opacity: 0;
    height: 0vh;

    transition: all 0.5s ease-in;
  }

  #toggle:checked ~ .togglable {
    visibility: visible;
    opacity: 1;
    height: 100%;

    transition-delay: 0s;
  }
}
</style>