<template>
  <Nav></Nav>
  <section class="h-screen w-full p-4 pt-7 relative">
    <div class="container flex items-center py-3 justify-center">
    <div :class="request ? 'hidden' : 'flex flex-col py-2 w-full md:w-4/5 gap-3 realative'">
        <div :class="file ? 'hidden' : 'down w-full flex items-center justify-center flex-col'">
          <button @click="triggerFileInput" type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                fill="limegreen"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479 6.908l-4-4h3v-4h2v4h3l-4 4z"
                />
              </svg>
            </button>
            <span class="flex items-center justify-center"><h1>Upload a picture and I will answer you!</h1><img src="https://i.pinimg.com/originals/de/c3/9f/dec39fb225fd16cdce4562a10c520549.gif" class="w-10 h-10" alt=""></span>
            <input
              type="file"
              ref="fileInput"
              @change="handleFileUpload"
              style="display: none"
            />
      </div>
      <div :class="file ? 'flex' : 'hidden'" class="sendimg w-full h-80 flex items-center justify-center flex-col gap-3 relative">
        <img :src="file" alt="Your Img" class="w-full md:w-1/2 h-full object-cover rounded-lg">
        <div class="actions flex w-full md:w-1/2 items-center justify-center">
                  <button @click="sendImg()" type="button" class="text-white w-1/2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send</button>
        <button @click="camcell()" type="button" class="focus:outline-none w-1/2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Cancel</button>
        </div>
      </div>
    </div>
    <div :class="request ? 'flex flex-col py-2 border shadow p-3 rounded-lg border-dashed w-full md:w-4/5 gap-3 realative' : 'hidden'">
      <div class="img sendimg w-full h-80 flex items-center justify-center flex-col gap-3 relative">
        <img src="../img/kasallik2.png" alt="Your Img" class="w-full md:w-1/2 h-full object-cover rounded-lg">
      </div>
      <div class="ansver flex flex-col gap-3">
        <span class="about">
          <h1 class="font-bold md:text-2xl">About</h1>
          <p class="text-justify  text-[12px] md:text-base">This disease is caused by a fungus called Septoria lycopersici. Symptoms of this disease first appear on the lower leaves and then gradually spread to the upper leaves. In this disease, small circular, gray center with dark brown margin spots are formed on the underside of the leaves.</p>
        </span>
        <span class="couse">
          <h1 class="font-bold md:text-2xl">Couse of the problem</h1>
          <p class="text-justify  text-[12px] md:text-base">The symptoms of the disease on the stem and flowers are similar to that of the leaves. In case of severe infestation of disease, the leaves turn yellow and fall off.</p>
        </span>
        <span class="solution">
          <h1 class="font-bold md:text-2xl">Solution of the problem</h1>
          <p class="text-justify  text-[12px] md:text-base">Spraying of Mineb, Mancozeb, Chlorothalonil should be done to effectively prevent Septoria leaf blight disease. If required, spraying of above mentioned chemicals can be repeated at an interval of 8-10 days.</p>
        </span>
        <span class="solution">
          <h1 class="font-bold md:text-2xl">Medicine for the disease</h1>
          <div class="flex gap-7  items-center justify-center">
          <div class="card w-[25%]">
              <div class="left flex items-center justify-center">
              <img src="https://www.ifoda.uz/uploads/1/Un1SwxJsFbM0Imfw9PTG_Wy_KhGCN3y1.jpg" class="w-full h-36 md:w-1/2 md:h-44" alt="">
            </div>
            <div class="right flex flex-col gap-2">
              <h1 class="font-bold md:text-2xl">AGROFOS-D</h1>
              <p class="text-justify">Septoria lycopersici is a disease of plants Lorem ipsum dolor sit amet..</p>
              <button @click="(()=>{router.push('/products')})" target="_blank" class="text-white py-1 px-2 rounded-xl text-[12px] md:text-base bg-lime-500">Read more</button>
            </div>
          </div>
          <div class="card w-[25%]">
              <div class="left flex items-center justify-center">
              <img src="https://www.ifoda.uz/uploads/1/7D57JDpxSIFOB2d_Eh4lIV73D_TNS8Ak.png" class="w-full h-36 md:w-1/2 md:h-44" alt="">
            </div>
            <div class="right flex flex-col gap-2">
              <h1 class="font-bold md:text-2xl">БЕНТОГРАН</h1>
              <p class="text-justify  text-[12px] md:text-base">Septoria lycopersici is a disease of plants Lorem ipsum dolor sit amet..</p>
              <button @click="(()=>{router.push('/products')})" target="_blank" class="text-white py-1 px-2 rounded-xl text-[12px] md:text-base bg-lime-500">Read more</button>
            </div>
          </div>
          <div class="card w-[25%]">
              <div class="left flex items-center justify-center">
              <img src="https://www.ifoda.uz/uploads/1/k24tXqOWMM-vIzQKosJnsUBexE8CfqAf.jpg" class="w-full h-36 md:w-1/2 md:h-44" alt="">
            </div>
            <div class="right flex flex-col gap-2">
              <h1 class="font-bold text-sm md:text-2xl">ENTOXLOROK</h1>
              <p class="text-justify  text-[12px] md:text-base">Septoria lycopersici is a disease of plants Lorem ipsum dolor sit amet..</p>
              <button @click="(()=>{router.push('/products')})" target="_blank" class="text-white py-1 px-2 rounded-xl text-[12px] md:text-base bg-lime-500">Read more</button>
            </div>
          </div>
          </div>
        </span>
      </div>
      <span class="flex items-center justify-end gap-2">
        <div class="refresh">
          <svg clip-rule="evenodd" @click="refresh()" width="24" class="cursor-pointer" height="24" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m3.508 6.726c1.765-2.836 4.911-4.726 8.495-4.726 5.518 0 9.997 4.48 9.997 9.997 0 5.519-4.479 9.999-9.997 9.999-5.245 0-9.553-4.048-9.966-9.188-.024-.302.189-.811.749-.811.391 0 .715.3.747.69.351 4.369 4.012 7.809 8.47 7.809 4.69 0 8.497-3.808 8.497-8.499 0-4.689-3.807-8.497-8.497-8.497-3.037 0-5.704 1.597-7.206 3.995l1.991.005c.414 0 .75.336.75.75s-.336.75-.75.75h-4.033c-.414 0-.75-.336-.75-.75v-4.049c0-.414.336-.75.75-.75s.75.335.75.75z" fill-rule="nonzero"/></svg>
        </div>
        <div class="copy">
          <svg clip-rule="evenodd" width="24" height="24" class="cursor-pointer" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 18h-3c-.48 0-1-.379-1-1v-14c0-.481.38-1 1-1h14c.621 0 1 .522 1 1v3h3c.621 0 1 .522 1 1v14c0 .621-.522 1-1 1h-14c-.48 0-1-.379-1-1zm1.5-10.5v13h13v-13zm9-1.5v-2.5h-13v13h2.5v-9.5c0-.481.38-1 1-1z" fill-rule="nonzero"/></svg>
        </div>
      </span>
    </div>
    <div class="chat hidden absolute bottom-0 right-5">
      <span class="animate-pulse">
        <svg xmlns="http://www.w3.org/2000/svg" @click="() => router.push({path: '/chat'})" class="cursor-pointer"  width="35" fill="green" height="35" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.145 7.961-9.91 7.961-1.937 0-3.383-.397-4.394-.644-1 .613-1.595 1.037-4.272 1.82.535-1.373.723-2.748.602-4.265-.838-1-2.025-2.4-2.025-4.872-.001-4.415 4.485-8.007 9.999-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.418.345 2.775.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006zm0 14h-5v-1h5v1zm5-3h-10v-1h10v1zm0-3h-10v-1h10v1z"/></svg>
      </span>
    </div>
    </div>
  </section>
  <!-- <Footer class="mt-2"></Footer> -->
</template>
<script setup>
import Nav from "../components/Nav/Main.vue";
import { ref } from "vue";
import router from "@/router";
import Swal from "sweetalert2";
import Footer from "../components/Footer/Main.vue";

const fileInput = ref(null);
const file = ref();
const request = ref(false);

const triggerFileInput = () => {
  fileInput.value.click();
};

const camcell = () => {
  file.value = "";
}

const refresh = () => {
  request.value = false;
  file.value = "";
}

const sendImg = () => {
  if (!localStorage.getItem("token")) {
    router.push("/login");
  }else{
     Swal.fire({
    position: "top-center",
    icon: "success",
    title: "Send your image successfully!",
    showConfirmButton: false,
    timer: 1500,
  })
  request.value = true;
  }
}

const handleFileUpload = (event) => {
  file.value = event.target.files[0];
  if (file.value) {
    file.value = URL.createObjectURL(file.value);
    console.log("Tanlangan fayl:", file.value);
  }
};

const sendFile = () => {
  if (localStorage.getItem("token")) {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Send your image successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
    request.value = true;
  } else {
    router.push("/login");
  }
};
const cancel = () => {
  file.value = "";
  request.value = false;
}
</script>
<style scoped>
textarea{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
/* section{
      background-image: url("https://img.goodfon.ru/original/1920x1080/b/16/3d-robot-belyy-fon.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
} */
</style>
