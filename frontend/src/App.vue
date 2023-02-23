<script setup>
import { logo } from "./assets";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <RouterLink to="/">
      <img :src="logo" class="logo" alt="" />
    </RouterLink>
    <RouterLink to="/create-post" class="link"> Create </RouterLink>
  </header>
  <main>
    <router-view />
  </main>
</template>
