<template>
  <view class="app-shell">
    <slot />
  </view>
</template>

<script setup lang="ts">
// 业务重做阶段，这里先保持极简壳层。
</script>

<style scoped lang="scss">
.app-shell {
  min-height: 100vh;
  background: #f7f8fa;
}
</style>
