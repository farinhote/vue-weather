<template>
  <div class="weather">
    <span class="placeholder">{{main.name}}</span>
  </div>
</template>

<script>

export default {
  name: "Main",

  computed: {
    main() {
      return this.$store.state.main;
    },
  },
};
</script>

<style scoped lang="scss">
.weather {
  @include super-center();
}
</style>