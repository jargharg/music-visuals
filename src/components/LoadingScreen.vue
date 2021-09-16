<template>
  <div class="loading-screen">
    Loading
    <span class="dot">.</span>
    <span class="dot">.</span>
    <span class="dot">.</span>
  </div>
</template>

<style lang="scss" scoped>
.loading-screen {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--sea-green-crayola);
  background: var(--space-cadet);
  font: 3rem monospace;
}

// @TODO: animate dots
</style>
