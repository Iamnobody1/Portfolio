<template>
  <div id="app" class="flex flex-col">
    <NavBar />
    <Jumbotron />
    <Cards />
    <Footer />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue";
import Jumbotron from "@/components/Jumbotron.vue";
import Footer from "@/components/Footer.vue";
import Cards from "@/components/Cards.vue";

@Component({
  components: {
    NavBar,
    Jumbotron,
    Footer,
    Cards,
  },
})
export default class App extends Vue {}
</script>
