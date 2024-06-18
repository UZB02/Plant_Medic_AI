<template>
  <Nav></Nav>
  <section class="h-[80vh] flex items-center justify-center p-4 pt-14 relative">
    <div
      class="container pt-11 pb-4 flex items-center justify-center flex-col md:flex-row"
    >
      <div class="flex flex-col md:flex-row items-center justify-center">
        <h1
          class="md:text-4xl text-xl font-bold text-center uppercase font-sans"
        >
          Plant Medic <span class="text-lime-500">AI</span>
        </h1>
        <img
          width="100px"
          height="100px"
          src="https://cdn.dribbble.com/users/690291/screenshots/3507754/untitled-1.gif"
          alt=""
        />
      </div>
      <div
        :class="request ? 'card flex items-center flex-col  lg:flex-row gap-3 p-4 md:w-2/3 w-full h-full border border-separate border-dotted' : 'card flex items-center flex-col p-4 md:w-2/3 w-full h-full border border-separate border-dotted'"
      >
        <form
          action=""
          class="w-full h-full flex flex-col items-center justify-center"
        >
        <h1
          :class="
            file
              ? 'hidden'
              : 'flex items-center justify-center flex-col text-center'
          "
        >
          Hi! How Can I Help You?
        </h1>
        <!-- <h1
          :class="
            file
              ? 'flex items-center justify-center flex-col text-center'
              : 'hidden'
          "
        >
          Are you shoure to upload an image?
        </h1> -->
          <span
            class="flex items-center justify-center flex-col text-center"
            :class="
              file
                ? 'hidden'
                : 'flex items-center justify-center flex-col text-center'
            "
          >
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
            <span><h1>Upload a picture and I will answer you!</h1></span>
            <input
              type="file"
              ref="fileInput"
              @change="handleFileUpload"
              style="display: none"
            />
          </span>
          <span
            :class="
              file
                ? 'w-full h-full flex items-center justify-center flex-col text-center'
                : 'hidden'
            "
          >
            <img
              :src="file"
              class="w-auto h-[50vh] md:object-cover md:h-[50vh]"
              alt=""
            />
          <span :class="request ? 'hidden' : 'flex items-center justify-center w-full gap-1'">
              <button
              @click="sendFile()"
              type="button"
              class="text-white flex items-center w-1/2 md:w-1/3 justify-center gap-1 bg-lime-500 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-base px-4 py-2 text-center dark:bg-lime-600 dark:hover:bg-lime-700 mt-3 dark:focus:ring-lime-800"
            >
              Send
            </button>
            <button @click="cancel()" type="button" class="text-white flex items-center w-1/2 md:w-1/3 justify-center gap-1 bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-base px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 mt-3 dark:focus:ring-red-800">Cancel</button>
          </span>
          </span>
        </form>
        <textarea name="" disabled id="" cols="30" :class="request ? 'w-full h-[50vh] outline-none border-none' : 'hidden'" rows="10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repellat possimus quidem perspiciatis unde? Praesentium, cumque enim incidunt delectus cupiditate quae eligendi perferendis beatae neque ducimus adipisci non sapiente officia eos voluptatibus nesciunt. Itaque vero perferendis enim saepe. Repudiandae commodi saepe libero quos perspiciatis in porro ipsa inventore aliquam magni illo optio sequi totam aspernatur sapiente earum error, aliquid deleniti blanditiis officia! Architecto fuga provident quasi dignissimos quia soluta ad illo quas officiis, vitae deserunt repellendus natus. Non animi aliquid sint optio ad consequatur natus placeat harum omnis qui quos doloremque maiores modi itaque, sit molestiae quis dolore quo dignissimos atque suscipit. Reiciendis aliquid vitae, accusantium sunt cum quibusdam sapiente consectetur tenetur magnam rerum natus laboriosam ipsam nihil qui et reprehenderit placeat omnis asperiores magni praesentium exercitationem sit officia. Illum quaerat, quidem eum recusandae minus ratione facilis incidunt explicabo quis quisquam dicta eaque ut quod alias similique delectus tenetur vel, ipsam vitae tempore aliquid totam dolor atque expedita! Pariatur consequuntur iste excepturi reprehenderit sunt hic quam aperiam facilis minima, repellat possimus debitis eos eum provident veniam? Ut tenetur aperiam eos repudiandae ullam eius quasi, mollitia dolor officia nam odit a optio rerum delectus soluta error nostrum earum? Earum, ab id.</textarea>
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
