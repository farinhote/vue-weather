<template>
  <div class="card-lists">
    <!-- Prevent undefined errors while still loading -->
    <Card-list v-if="history.length === 5" :list="history" :title="`Last 5 days`"/>
    <Card-list :list="forecast" :title="`Forecast`" />
  </div>
</template>

<script>

import CardList from "@/components/CardList.vue";

export default {
  name: "Additional",
  components: {
    CardList
  },

  computed: {
    forecast() {
      return this.$store.state.forecast;
    },
    history() {
      return this.$store.state.history;
    },
  },
};
</script>

<style scoped lang="scss">
.card-lists {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 1080px) {
  .card-lists {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
}
</style>