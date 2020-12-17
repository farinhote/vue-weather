<template>
  <div class="main">
    <span class="placeholder">{{main.name}}</span>
    <img :src="source" loading="lazy" />
    <span class="placeholder">{{main.name}}</span>
    <span class="placeholder">{{convertTemp(main.temp)}}</span>
  </div>
</template>

<script>
import mixins from '@/mixins/mixins.js'

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
  grid-template-columns: 66% 33%;
}

img {
  max-width: 90%;
  max-height: 90%;
}
</style>