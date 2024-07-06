<template>
  <Nav></Nav>
  <section class="h-[80vh] w-full p-4 pt-7 relative">
    <div class="container flex items-center justify-center">
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
        <div class="actions flex w-1/2 items-center justify-center">
                  <button @click="sendImg()" type="button" class="text-white w-1/2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send</button>
        <button @click="camcell()" type="button" class="focus:outline-none w-1/2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Cancel</button>
        </div>
      </div>
    </div>
    <div :class="request ? 'flex flex-col py-2 border p-3 rounded-lg border-dashed w-full md:w-4/5 gap-3 realative' : 'hidden'">
      <div class="img sendimg w-full h-80 flex items-center justify-center flex-col gap-3 relative">
        <img :src="file" alt="Your Img" class="w-full md:w-1/2 h-full object-cover rounded-lg">
      </div>
      <div class="ansver">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque est velit error voluptas architecto eos consequuntur labore officia exercitationem beatae ab, nisi, porro quos aperiam possimus! Ratione deserunt, distinctio commodi, fuga esse itaque impedit aut laudantium rerum, odio fugit praesentium placeat nam voluptas molestias aliquid ex error cumque sunt vero corporis saepe. Deleniti vero ut culpa, delectus quasi fugiat dolorum ipsam adipisci laborum! Quos recusandae quam fugit vero magnam doloremque ratione soluta labore, id est corrupti minima, incidunt et numquam odit dolore ad pariatur cupiditate nihil nesciunt! Optio tempora veritatis ratione repudiandae distinctio quam ex. Facilis aperiam vitae dolores tempore fugit. Omnis illo vero vitae enim, recusandae hic nesciunt quam, velit amet magni, modi ex maxime! Excepturi veritatis iusto odit quaerat odio suscipit nemo minima, recusandae maxime officiis obcaecati necessitatibus accusamus hic eius, vel vitae enim quidem magni nihil cum consequuntur exercitationem! Velit, molestias, ipsa at eveniet quia vitae dolorum libero reprehenderit placeat deserunt voluptate voluptatem aliquam, recusandae facilis rem. Laboriosam libero placeat sit voluptatibus, eum suscipit repellendus beatae ratione nemo reiciendis quae perspiciatis cupiditate eligendi earum quo eaque illo natus aperiam dolorum quisquam saepe fuga quasi architecto? Repudiandae voluptas nam iusto blanditiis at, laboriosam architecto, repellat est dolorum aliquid hic similique eveniet ipsa maiores consequuntur aliquam a rerum tempore. Veniam eos nulla excepturi nostrum nobis reprehenderit nesciunt, consequatur error cumque quasi, quisquam ipsa voluptatum. Nostrum molestiae optio deleniti, voluptas accusantium pariatur adipisci! Odit adipisci magnam nobis sed ea odio quas, modi accusantium voluptatum repudiandae debitis quod unde libero ex, laboriosam nam quaerat, quisquam corrupti molestias natus repellendus similique aliquam exercitationem! Ducimus molestiae nihil dignissimos in incidunt atque aperiam molestias beatae vero voluptatem obcaecati, distinctio blanditiis recusandae provident eos, quidem, veritatis velit ipsum? Voluptatum quod aspernatur odit unde, ratione hic perferendis quisquam debitis corrupti accusantium aperiam quae quis doloremque non!</p>
      </div>
      <span class="flex items-center justify-end gap-2">
        <div class="refresh">
          <svg clip-rule="evenodd" @click="refresh()" data-tooltip-target="tooltip-top" data-tooltip-placement="top" width="24" class="cursor-pointer" height="24" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m3.508 6.726c1.765-2.836 4.911-4.726 8.495-4.726 5.518 0 9.997 4.48 9.997 9.997 0 5.519-4.479 9.999-9.997 9.999-5.245 0-9.553-4.048-9.966-9.188-.024-.302.189-.811.749-.811.391 0 .715.3.747.69.351 4.369 4.012 7.809 8.47 7.809 4.69 0 8.497-3.808 8.497-8.499 0-4.689-3.807-8.497-8.497-8.497-3.037 0-5.704 1.597-7.206 3.995l1.991.005c.414 0 .75.336.75.75s-.336.75-.75.75h-4.033c-.414 0-.75-.336-.75-.75v-4.049c0-.414.336-.75.75-.75s.75.335.75.75z" fill-rule="nonzero"/></svg>
          
       <div id="tooltip-top" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip on top
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
        </div>
        <div class="copy">
          <svg clip-rule="evenodd" width="24" height="24" class="cursor-pointer" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 18h-3c-.48 0-1-.379-1-1v-14c0-.481.38-1 1-1h14c.621 0 1 .522 1 1v3h3c.621 0 1 .522 1 1v14c0 .621-.522 1-1 1h-14c-.48 0-1-.379-1-1zm1.5-10.5v13h13v-13zm9-1.5v-2.5h-13v13h2.5v-9.5c0-.481.38-1 1-1z" fill-rule="nonzero"/></svg>
        </div>
      </span>
    </div>
    </div>
  </section>
</template>
<script setup>
import Nav from "../components/Nav/Main.vue";
import { ref } from "vue";
import router from "@/router";
import Swal from "sweetalert2";

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
  Swal.fire({
    position: "top-center",
    icon: "success",
    title: "Send your image successfully!",
    showConfirmButton: false,
    timer: 1500,
  })
  request.value = true;
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
