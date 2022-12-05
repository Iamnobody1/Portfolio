<template>
  <div id="app" class="flex flex-col">
    <NavBar />
    <Jumbotron />
    <Footer />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "@/components/NavBar.vue";
import Jumbotron from "@/components/Jumbotron.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    NavBar,
    Jumbotron,
    Footer,
  },
})
export default class App extends Vue {}
</script>
