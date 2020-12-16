<template>
  <img :data-src="lazySrc" class="image" />
</template>

<script>
import lozad from "lozad";

export default {
  name: "LazyImage",
  props: {
    lazySrc: {
      type: String,
      default: null,
    },
  },
  mounted() {
    const observer = lozad(this.$el);
    observer.observe();
  },
};
</script>

<style lang="scss">
// Responsive image styles.
.image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  vertical-align: middle;
}
</style>