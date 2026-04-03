<template>
  <view class="page-home">
    <view class="page-home__card">
      <text class="page-home__title">Offer Bank · Mobile Foundation</text>
      <text class="page-home__desc">
        当前先落移动端基础骨架、目录分层和工程规范，业务页面后续继续补齐。
      </text>
    </view>
  </view>
</template>

<script setup lang="ts">
// 首页占位页，仅用于保持项目骨架完整。
</script>

<style scoped lang="scss">
.page-home {
  min-height: 100vh;
  padding: 32rpx;
  box-sizing: border-box;
  background: #f7f8fa;

  &__card {
    padding: 40rpx;
    border-radius: 24rpx;
    background: #ffffff;
    box-shadow: 0 12rpx 40rpx rgb(15 23 42 / 8%);
  }

  &__title {
    display: block;
    margin-bottom: 16rpx;
    font-size: 40rpx;
    font-weight: 700;
    color: #111827;
  }

  &__desc {
    display: block;
    font-size: 28rpx;
    line-height: 1.7;
    color: #6b7280;
  }
}
</style>
