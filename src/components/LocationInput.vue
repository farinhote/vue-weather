<template>
  <div class="input-wrapper">
    <input
      @input="filterChange"
      type="input"
      class="input-field"
      placeholder="Search location"
      name="search"
      id="search"
      v-model="filter"
    />
  </div>
</template>

<script>
import { debounce } from "@/helpers/debouncer.js";

export default {
  name: "LocationInput",

  methods: {
    filterChange: debounce(function () {
      this.$store.dispatch("getWeather", {
        q: this.filter,
      });
    }, 500),
  },

  computed: {
    filter: {
      get: function () {
        return this.$store.state.filter;
      },
      set: function (newValue) {
        this.$store.commit("setFilter", newValue);
      },
    },
  },
};
</script>

<style scoped lang="scss">
$input-background: rgba(57, 63, 84, 0.8);
$input-text-inactive: #7881a1;
$input-text-active: #bfd2ff;

// gradient animation
@keyframes gradient {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
}

.input-wrapper {
  @include super-center();
  position: relative;
  padding: 1rem;
  background: $input-background;
  &:after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 2px;
    background-position: 0% 0%;
    background: linear-gradient(
      to right,
      #b294ff,
      #57e6e6,
      #feffb8,
      #57e6e6,
      #b294ff,
      #57e6e6
    );
    background-size: 500% auto;
    animation: gradient 3s linear infinite;
  }
}

.input-wrapper input {
  color: $input-text-active;
  font-size: 1.8rem;
  &::-webkit-input-placeholder {
    color: $input-text-inactive;
  }
}
</style>