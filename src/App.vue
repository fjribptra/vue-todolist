<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="bg-green-500 flex justify-center items-center gap-5 font-bold text-white transition-all p-3 fixed top-0 left-0 right-0">
    <RouterLink class="hover:text-blue-600" to="/">Home</RouterLink>
    <RouterLink class="hover:text-blue-600" to="/about">About</RouterLink>
    <RouterLink class="hover:text-blue-600" to="/todolist">Todolist</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
body {
  padding-top: 300px;
}
</style>
