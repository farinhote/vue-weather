<template>
  <div class="input-wrapper">
    <input class="input-field" type="text" placeholder="Choose your Location" />
  </div>
</template>

<script>
export default {
  name: "LocationInput",

  computed: {
    main() {
      return this.$store.state.main;
    },
  },
};
</script>

<style scoped lang="scss">
$input-background: rgba(57, 63, 84, 0.8);
$input-text-inactive: #7881A1;
$input-text-active: #BFD2FF;

// gradient animation
@keyframes gradient {
  0%{background-position:0 0}
  100%{background-position:100% 0}
}

.input-wrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  max-width: 26rem;
  margin: 0 auto;
  border-radius: 2px;
  padding: 1rem;
  background: $input-background;
  &:after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 2px;
    background-position: 0% 0%;
    background: linear-gradient(to right, #B294FF, #57E6E6, #FEFFB8, #57E6E6, #B294FF, #57E6E6);
    background-size: 500% auto;
    animation: gradient 3s linear infinite;
  }
}

.input-wrapper input {
  color: $input-text-active;
  font-size: 1.8rem;
  &::-webkit-input-placeholder {
    color: $input-text-inactive;
  }
}
</style>