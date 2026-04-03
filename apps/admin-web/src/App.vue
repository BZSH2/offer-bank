<template>
  <main class="admin-shell">
    <section class="admin-shell__card">
      <h1 class="admin-shell__title">Offer Bank · Admin Foundation</h1>
      <p class="admin-shell__desc">
        管理端当前先保留基础骨架、目录约定和 lint 规范，后续再逐步补业务模块。
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
// 当前阶段先完成基础工程搭建。
</script>

<style scoped lang="scss">
.admin-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 32px;
  background: #f7f8fa;

  &__card {
    width: min(720px, 100%);
    padding: 32px;
    border-radius: 20px;
    background: #ffffff;
    box-shadow: 0 12px 40px rgb(15 23 42 / 8%);
  }

  &__title {
    margin: 0 0 12px;
    font-size: 28px;
    color: #111827;
  }

  &__desc {
    margin: 0;
    line-height: 1.7;
    color: #6b7280;
  }
}
</style>
