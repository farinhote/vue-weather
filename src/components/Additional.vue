<template>
  <div class="card-lists">
    <!-- Prevent undefined errors while still loading -->
    <Card-list v-if="forecast.length" :list="forecast" :title="`Forecast`" />
    <Card-list
      v-if="history.length === 5"
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
    CardList,
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
  grid-template-columns: 1fr;
  grid-gap: 2rem;
}
</style>