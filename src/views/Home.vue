<template>
  <fragment>
    <Weather />
    <!-- <Background /> -->
    <!-- <Prevision /> -->
  </fragment>
</template>

<script>
import Weather from "@/components/Weather.vue";
// import Background from "@/components/Background.vue";
import { Fragment } from "vue-fragment";

export default {
  name: "Home",
  components: {
    Weather,
    Fragment,
  }
};
</script>