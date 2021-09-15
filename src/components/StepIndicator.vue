<template>
  <svg viewBox="0 0 50 10" class="step-indicator">
    <circle cx="5" cy="5" r="4" fill="red" />
    <circle cx="15" cy="5" r="4" fill="red" v-if="step > 0" />
    <circle cx="25" cy="5" r="4" fill="red" v-if="step > 1" />
    <circle cx="35" cy="5" r="4" fill="red" v-if="step > 2" />
  </svg>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.step-indicator {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 5rem;
  height: 1rem;
}
</style>
