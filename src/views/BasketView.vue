<template>
  <Nav></Nav>
  <section>
    <div class="container flex flex-col-reverse md:flex-row gap-2">
      <div
        class="filter md:flex flex-col flex-wrap items-center gap-3 py-3 border-r-2 pr-3 w-full md:w-[20%]"
      >
        <span><h1 class="text-center text-3xl">Kategoriyalar</h1></span>
        <div class="flex md:flex-col flex-wrap">
          <article
            @click="router.push('/products')"
            class="flex cursor-pointer hover:bg-gray-100 w-full rounded-lg items-center justify-center"
          >
            <span class="flex w-full p-2 items-center justify-center gap-3">
              <div
                class="left border rounded-sm w-10 h-10 flex items-center justify-center"
              >
                <img
                  src="https://www.ifoda.uz/uploads/1/KsWmsmK4ho6oCPfkQI_z90lhY7DRwoWn.png"
                  alt=""
                />
              </div>
              <div class="right w-1/2">
                <h1 class="font-sans font-medium text-base">Gerbitsitlar</h1>
              </div>
            </span>
          </article>
          <article
            class="flex cursor-pointer hover:bg-gray-100 w-full rounded-lg items-center justify-center"
          >
            <span class="flex w-full p-2 items-center justify-center gap-3">
              <div
                class="left border rounded-sm w-10 h-10 flex items-center justify-center"
              >
                <img
                  src="https://www.ifoda.uz/uploads/1/TpVmdbLuYKCzxt3RLEDGlh7anXBy-4kS.png"
                  alt=""
                />
              </div>
              <div class="right w-1/2">
                <h1 class="font-sans font-medium text-base">Fungitsidlar</h1>
              </div>
            </span>
          </article>
          <article
            class="flex cursor-pointer hover:bg-gray-100 w-full rounded-lg items-center justify-center"
          >
            <span class="flex w-full p-2 items-center justify-center gap-3">
              <div
                class="left border rounded-sm w-10 h-10 flex items-center justify-center"
              >
                <img
                  src="https://www.ifoda.uz/uploads/1/mlweQTSUHoYqHDmMuxN00Gzl7CRkwQlJ.png"
                  alt=""
                />
              </div>
              <div class="right w-1/2">
                <h1 class="font-sans font-medium text-base">Insektitsidlar</h1>
              </div>
            </span>
          </article>
          <article
            class="flex cursor-pointer hover:bg-gray-100 w-full rounded-lg items-center justify-center"
          >
            <span class="flex w-full p-2 items-center justify-center gap-3">
              <div
                class="left border rounded-sm w-10 h-10 flex items-center justify-center"
              >
                <img
                  src="https://www.ifoda.uz/uploads/1/GPJIsdWj7MdvTd-nEGpOMoAMGtWARzsz.png"
                  alt=""
                />
              </div>
              <div class="right w-1/2">
                <h1 class="font-sans font-medium text-base">Nematsidlar</h1>
              </div>
            </span>
          </article>
          <article
            class="flex cursor-pointer hover:bg-gray-100 w-full rounded-lg items-center justify-center"
          >
            <span class="flex w-full p-2 items-center justify-center gap-3">
              <div
                class="left border rounded-sm w-10 h-10 flex items-center justify-center"
              >
                <img
                  src="https://www.ifoda.uz/uploads/1/Eboen0JUt9xRJeq7eyVOo3qyzqkIrK2i.png"
                  alt=""
                />
              </div>
              <div class="right w-1/2">
                <h1 class="font-sans font-medium text-base">Stimulyatorlar</h1>
              </div>
            </span>
          </article>
          <article
            class="flex cursor-pointer hover:bg-gray-100 w-full rounded-lg items-center justify-center"
          >
            <span class="flex w-full p-2 items-center justify-center gap-3">
              <div
                class="left border rounded-sm w-10 h-10 flex items-center justify-center"
              >
                <img
                  src="https://www.ifoda.uz/uploads/1/BxiVZ1G6pEbXwCqnycNUtilwGcOa4Ncg.png"
                  alt=""
                />
              </div>
              <div class="right w-1/2">
                <h1 class="font-sans font-medium text-base">Akaratsidlar</h1>
              </div>
            </span>
          </article>
        </div>
      </div>

      <div :class="products.length > 0 ? 'w-full flex flex-wrap  md:w-[80%]' : 'hidden'">
        <table
          class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-16 py-3">
                <span class="sr-only">Image</span>
              </th>
              <th scope="col" class="px-6 py-3">Mahsulot</th>
              <th scope="col" class="px-6 py-3">Miqdori</th>
              <th scope="col" class="px-6 py-3">Narxi</th>
              <th scope="col" class="px-6 py-3">Summa</th>
              <th scope="col" class="px-6 py-3">Amal</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in products"
              :key="index"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td class="p-4">
                <img
                  :src="item.img"
                  class="w-16 md:w-32 max-w-full max-h-full"
                  alt="Apple Watch"
                />
              </td>
              <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {{ item.name }}
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div>
                    <input
                      type="number"
                      id="first_product"
                      class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      v-model="item.count"
                      @input="updateCount(item)"
                      required
                      min="0"
                    />
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                ${{ item.price }}
              </td>
              <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                ${{ item.price * item.count }}
              </td>
              <td class="px-6 py-4">
                <span
                  @click="deletProduct(item.id)"
                  class="font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline"
                  >Remove</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        :class="
          products.length == 0 ? 'flex items-center justify-center' : 'hidden'
        "
      >
        <img
          src="https://i.pinimg.com/originals/bc/bd/99/bcbd99c43aea08b85d3c3a6b80a47b56.png"
          class="w-full"
          alt="Savat Bo'sh"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
import Nav from "../components/Nav/Main.vue";
import { ref } from "vue";
import router from "@/router";

const products = ref(
  localStorage.getItem("buyProducts")
    ? JSON.parse(localStorage.getItem("buyProducts"))
    : []
);

function checked() {
  for (let i = 0; i < products.value.length; i++) {
    if (products.value[i].count === 0) {
      products.value.splice(i, 1);
      i--;
    }
  }
}
checked()
function updateCount(item) {
  for (let i = 0; i < products.value.length; i++) {
    if (products.value[i].id === item.id) {
      products.value[i].count = item.count;
    }
  }
  checked()
  localStorage.setItem("buyProducts", JSON.stringify(products.value));
}

function deletProduct(id) {
  let index = products.value.find((product) => product.id === id);
  index.count = 0;
  products.value.splice(index, 1);
  localStorage.setItem("buyProducts", JSON.stringify(products.value));
}
</script>
<style scoped></style>
