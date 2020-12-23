<template>
  <div class="card-list-wrapper">
    <Card v-for="value in list" :key="`${value.dt}`" :weather="value" />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "CardList",
  components: {
    Card,
  },
  props: {
    list: Array,
  },
};
</script>

<style scoped lang="scss">
.card-list-wrapper {
  display: flex;
  flex-direction: row;
}

.card-list-wrapper ::v-deep .card-wrapper {
  flex: 1 1 150px;
  justify-content: center;
}
</style>