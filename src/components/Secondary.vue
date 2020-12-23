<template>
  <div class="wrapper">
    <input type="checkbox" id="toggle" />
    <label for="toggle">Press to toggle extra info</label>
    <div class="togglable">
      <div class="secondary">
        <div class="cell wind">
          <img
            class="arrow"
            :style="{ transform: 'rotate(' + windDeg + 'deg)' }"
            src="@/assets/secondary/north.svg"
            loading="lazy"
          />
          <div class="wind-label">Wind: {{ secondary.wind.speed }} km/h</div>
        </div>
        <div class="cell sunrise-set">
          <img src="@/assets/secondary/sunrise.svg" loading="lazy" />
          <div class="sunrise-label">Sunrise: {{ getHour(secondary.sunrise) }}</div>
          <div class="sunset-label">Sunset: {{ getHour(secondary.sunset) }}</div>
        </div>
        <div class="cell humidity">
          <img src="@/assets/secondary/humidity.svg" loading="lazy" />
          <div class="humidity-label">Humidity: {{ secondary.humidity }}%</div>
        </div>
        <div class="cell pressure">
          <img src="@/assets/secondary/barometer.svg" loading="lazy" />
          <div class="pressure-label">Pressure: {{ secondary.pressure }}hPa</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from "@/mixins/mixins.js";

export default {
  name: "Secondary",
  mixins: [mixins],

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

label,
input {
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

  // This css toggle feels very dodgy but you asked to be surprised (:
  #toggle ~ .togglable {
    opacity: 0;
    height: 0vh;

    transition: all 0.5s ease-in;
  }

  #toggle:checked ~ .togglable {
    opacity: 1;
    height: 100%;

    transition-delay: 0s;
  }

  #toggle ~ label {
    margin-bottom: 0;

    transition: all 0.5s ease-in;
  }

  #toggle:checked ~ label {
    margin-bottom: 2rem;

    transition-delay: 0s;
  }
}
</style>