<template>
  <div class="main">
    <div class="location">
      <div class="name">{{ main.name }}</div>
      <div class="description">{{ main.description }}</div>
    </div>
    <img :src="source" loading="lazy" />
    <div class="min-max">
      <div class="min">
        <div class="title">Min</div>
        <div class="temperature">{{ convertTemp(main.tempMin, undefined, 0) }}</div>
      </div>
      <div class="max">
        <div class="title">Max</div>
        <div class="temperature">{{ convertTemp(main.tempMax, undefined, 0) }}</div>
      </div>
    </div>
    <div class="current">
      <div class="title">Current</div>
      <div class="temperature">{{ convertTemp(main.temp) }}</div>
    </div>
  </div>
</template>

<script>
import mixins from "@/mixins/mixins.js";

export default {
  name: "Main",
  mixins: [mixins],

  computed: {
    main() {
      return this.$store.state.main;
    },
    source() {
      return this.$store.state.look.asset;
    },
  },
};
</script>

<style scoped lang="scss">
.main {
  @include super-center();
  @include side-by-side();
}

.location {
  @include super-center();
  .name {
    font-size: 1.6vw;
  }
  .description {
    font-size: 2.4vw;
  }
}

img {
  max-width: 90%;
  max-height: 90%;
}

.current {
  .title {
    font-size: 4vw;
  }
  .temperature {
    font-size: 3.6vw;
  }
}

.min-max {
  @include side-by-side();
  grid-gap: 2rem;
  .title {
    font-size: 3vw;
  }
  .temperature {
    font-size: 2.6vw;
  }
  .max {
    color: $max-color;
  }
  .min {
    color: $min-color;
  }
}

.title, .temperature {
  @include super-center();
}
</style>