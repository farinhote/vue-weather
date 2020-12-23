<template>
  <div class="card-lists">
    <!-- Prevent undefined errors while still loading -->
    <Card-list v-if="forecast.length" :list="forecast" :title="`Forecast`" />
    <Card-list
      v-if="historyInitializable"
      :list="history"
      :title="`Last 5 days`"
    />
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
    historyInitializable(){
      return this.history.filter(day => day).length === 5;
    }
  },
};
</script>

<style scoped lang="scss">
.card-lists {
  @include super-center();
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 1080px) {
  .card-lists {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
}
</style>