<template>
  <div class="selected-time-circle" />
</template>

<style scoped>
  .selected-time-circle {
    height: 45px;
    width: 45px;
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background: transparent;
    border-radius: 30px;
    border: 1px solid #2b2b2b;
    box-shadow: 0 0 10px 4px rgba(255, 255, 255, .5);
  }
</style>