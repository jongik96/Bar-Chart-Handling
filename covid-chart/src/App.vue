<template>
  <div>
    <div class="top">
      <h1>Covid-Test 2020~2021</h1>
      <menu-bar></menu-bar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import MenuBar from "./components/MenuBar.vue";
import { useStore } from "vuex";

const store = useStore();

store.dispatch("FETCH_TEST");
</script>

<style scoped>
.top {
  display: inline;
}
</style>
