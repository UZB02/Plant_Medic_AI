<template >
    <Nav></Nav>
    <section class="h-[80vh] p-4">
        <div class="container flex items-center justify-center flex-col md:flex-row">
        <div class="flex flex-col md:flex-row items-center justify-center">
                <h1 class="md:text-4xl text-xl font-bold text-center uppercase font-sans">Plant Medic <span class="text-lime-500">AI</span></h1>
            <img width="100px" height="100px" src="https://cdn.dribbble.com/users/690291/screenshots/3507754/untitled-1.gif" alt="">
        </div>
        <div class="card flex items-center flex-col p-4 md:w-2/3 w-full h-[60vh] border border-separate border-dotted">
            <h1 :class="file ? 'hidden' : 'flex items-center justify-center flex-col text-center'">Hi! How Can I Help You?</h1>
            <h1 :class="file ? 'flex items-center justify-center flex-col text-center' : 'hidden'">Are you shoure to upload an image?</h1>
            <form action="" class="w-full h-full flex flex-col items-center justify-center">
            <span class="flex items-center justify-center flex-col text-center" :class="file ? 'hidden' : 'flex items-center justify-center flex-col text-center'">
                    <button @click="triggerFileInput" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="limegreen" viewBox="0 0 24 24"><path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479 6.908l-4-4h3v-4h2v4h3l-4 4z"/></svg></button>
                 <span><h1>Upload a picture and I will answer you!</h1></span>
    <input type="file" ref="fileInput" @change="handleFileUpload" style="display: none;" />
            </span>
            <span :class="file ? 'w-full h-full flex items-center justify-center flex-col text-center' : 'hidden'">
                <img :src="file" class="w-full h-full" alt="">
            </span>
            </form>
        </div>
        </div>
    </section>
</template>
<script setup>
import Nav from '../components/Nav/Main.vue'
import { ref } from 'vue';

const fileInput = ref(null);
const file = ref();

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleFileUpload = (event) => {
   file.value = event.target.files[0];
  if (file.value) {
    file.value = URL.createObjectURL(file.value);
    console.log('Tanlangan fayl:', file.value);
  }
};
</script>
<style scoped>
/* section{
      background-image: url("https://img.goodfon.ru/original/1920x1080/b/16/3d-robot-belyy-fon.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white; 
} */
    
</style>