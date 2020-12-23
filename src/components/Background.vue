<template>
    <div class="background" :style="{ backgroundColor: color }"></div>
</template>

<script>
export default {
  name: "Background",
  computed: {
    color() {
      return this.$store.state.look.color;
    },
  },
};
</script>

<style scoped lang="scss">
.background {
  @include underlay();

  transition: background-color 3s ease-in;
  background-color: $secondary-color;
}
</style>