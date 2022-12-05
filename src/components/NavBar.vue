<template>
  <nav>
    <div class="flex gap-4 bg-gray-400 p-8 top-0">
      <div><router-link to="/">Home</router-link></div>
      <div><router-link to="/">Blog</router-link></div>
      <div><router-link to="about">About</router-link></div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "NavBar",
};
</script>
