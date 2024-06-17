<template>
  <section class="h-[90vh] flex items-center justify-center">
   <div class="container flex items-center  p-4">
     <div class="left flex items-center md:w-2/3 justify-center">
        <div class="card flex items-center md:w-3/4 justify-center">
          <div class="content flex flex-col gap-3">
            <h1 class="title font-bold text-6xl lg:text-8xl md:text-start text-center">
              Plant Medic <span class="text-lime-500">AI</span>
            </h1>
            <p class="copy md:w-3/4 w-full">
              A simple and easy-to-use AI-based image classification system for
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              alias ipsum quam quibusdam, voluptatum suscipit, excepturi ut nemo
              rerum cupiditate maxime eveniet aperiam omnis optio blanditiis cum
              sapiente culpa. Fuga?
            </p>
            <button
              class="text-white flex items-center  md:w-1/3 justify-center gap-1 bg-lime-500 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-base px-4 py-2 text-center dark:bg-lime-600 dark:hover:bg-lime-700 mt-3 dark:focus:ring-lime-800"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
   </div>
  </section>
</template>
<script setup>
</script>
<style scoped>
section{
  background-image: url("../../img/fon.jpg");
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