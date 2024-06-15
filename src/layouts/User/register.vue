<template>
  <Nav></Nav>
  <section class="py-24 h-[100vh] flex">
    <div class="conatainer w-full flex items-center justify-center">
      <form class="max-w-sm mx-auto w-full">
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your email</label
          >
          <input
            type="email"
            v-model="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
            placeholder="admin@gmail.com"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your password</label
          >
          <input
            type="password"
            v-model="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
            placeholder="••••••••"
            required
          />
        </div>
        <button
          type="button"
          @click="login"
          class="text-white bg-lime-500 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
        >
          Submit
        </button>
      </form>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import router from "@/router";
import Nav from "../../components/Nav/Main.vue"

const email = ref("");
const password = ref("");

function login() {
  if (email.value == "admin@gmail.com" && password.value == "11111111") {
    localStorage.setItem("token", "12345");
    router.push("/");
  } else {
    alert("login failed");
  }
}
</script>
<style>
section {
  background-image: url("https://bogatyr.club/uploads/posts/2023-03/1679143074_bogatyr-club-p-fon-kriptovalyuta-foni-instagram-55.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
}
</style>
