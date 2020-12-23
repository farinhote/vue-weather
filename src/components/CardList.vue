<template>
  <div class="card-list-wrapper">
    <div class="title">{{ title }}</div>
    <div class="card-list">
      <Card v-for="value in list" :key="`${value.dt}`" :weather="value" />
    </div>
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
    title: String,
  },
};
</script>

<style scoped lang="scss">
.card-list {
  display: flex;
}

.title {
  padding-left: 1rem;
}
</style>