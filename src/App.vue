<script setup lang="ts">

</script>
<template>
  <div class="container">
    <header class="header">
      <img src="/logo.png" alt="logo" class="header__logo">
      <h1>Movies List</h1>
    </header>
  </div>
</template>
<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    &__logo {
      max-width: 50px;
      margin-right: 10px;
    }
  }
  .btn {
    border: none;
    width: 100px;
    height: 40px;
    font-size: 14px;
    margin: 0 10px;
    border-radius: 10px;
    cursor: pointer;
    background-color: #efefef;

    &:hover {
      opacity: .7;
    }
    &_green {
      background-color: #37df5c;
    }
  }
  .tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
</style>
