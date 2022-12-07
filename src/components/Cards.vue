<script lang="ts">
import { cards } from "../data/cards";
export default {
  name: "Cards",

  data() {
    return {
      cards,
    };
  },
};
</script>

<template>
  <div class="grid grid-cols-3">
    <div v-for="card in cards" :key="card.id">{{ card.title }}</div>
  </div>
</template>
