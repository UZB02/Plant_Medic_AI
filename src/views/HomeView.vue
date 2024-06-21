<script setup>
import router from "@/router";
import { ref } from "vue";
import Nav from "@/components/Nav/Main.vue";
import Page1 from "@/components/Page1/Main.vue";
import Page2 from "@/components/Page2/Main.vue";
import Page3 from "@/components/Page3/Main.vue";

</script>

<template>
  <Nav></Nav>
  <section class="felex flex-col items-center gap-5 justify-center">
      <Page1></Page1>
  <Page2></Page2>
  <Page3></Page3>
  </section>
</template>
