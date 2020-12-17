<template>
  <div class="main">
    <span class="placeholder">{{main.name}}</span>
    <span class="placeholder">{{main.name}}</span>
    <span class="placeholder">{{main.name}}</span>
    <img :src="source" loading="lazy" />
  </div>
</template>

<script>

export default {
  name: "Main",

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
  grid-template-columns: 33% 66%;
}
</style>