<template>
  <div v-if="show" class="fixed inset-0 p-1 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-5 rounded-lg shadow-lg max-w-2xl w-full">
      <div class="flex justify-between items-center">
        <h3 class="text-2xl font-bold">{{ product.name }}</h3>
        <button @click="close" class="text-black">&times;</button>
      </div>
     <div class="flex md:flex-row flex-col">
         <img :src="product.img" alt="Product Image" class="md:w-1/2 md:h-60 h-40 my-4 rounded" />
      <!-- <p class="text-gray-800  text-justify">{{ product.about }}</p> -->
        <div class="w-full h-60 md:h-[300px] overflow-hidden relative">
    <div ref="scrollPanel" class="w-full h-full overflow-y-auto">
      <div class="w-full h-auto p-4">
        <!-- Kontentingizni bu yerga qo'ying -->
        <p  class="py-2 border-b text-justify border-gray-200">{{ product.about }}{{ product.about }}</p>
      </div>
    </div>
  </div>
     </div>
      <div class="flex items-center mt-2.5 mb-5">
        <div class="flex items-center space-x-1 rtl:space-x-reverse">
          <Rating v-model="value" class="text-orange-500 flex flex-row gap-1 cursor-pointer" />
        </div>
        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3"> <p class="text-gray-800 text-lg">${{ product.price }}</p></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { ref } from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  product: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(['close']);

const close = () => {
  emits('close');
};


</script>

<style scoped>
   ::-webkit-scrollbar{
        width: 0;
    }
/* Modal styling */
</style>
