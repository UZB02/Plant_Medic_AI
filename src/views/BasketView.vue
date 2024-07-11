<template>
  <Nav></Nav>
  <section>
    <div class="container flex flex-col-reverse md:flex-row gap-2">
      <div
        class="filter md:flex flex-col flex-wrap items-center gap-3 py-3 border-r-2 pr-3 w-full md:w-[20%]"
      >
        <span><h1 class="text-center text-3xl">Kategoriyalar</h1></span>
        <div class="flex md:flex-col flex-wrap">
          <article @click="router.push('/products')"
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
      

<div class="relative  w-full overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-16 py-3">
                    <span class="sr-only">Image</span>
                </th>
                <th scope="col" class="px-6 py-3">
                    Mahsulot
                </th>
                <th scope="col" class="px-6 py-3">
                    Miqdori
                </th>
                <th scope="col" class="px-6 py-3">
                    Narxi
                </th>
                <th scope="col" class="px-6 py-3">
                    Amal
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in data" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="p-4">
                    <img :src="item.img" class="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch">
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {{ item.name }}                                                  
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <!-- <button class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button> -->
                        <div>
                            <input type="number" id="first_product" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="item.count" required />
                        </div>
                        <!-- <button class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button> -->
                    </div>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ${{ item.price }}
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </div>
  </section>
</template>
<script setup>
import Nav from "../components/Nav/Main.vue";
import { ref } from "vue";
import router from "@/router";

const data = ref([
  {
    id: 1,
    name: "AGROFOS-D",
    count: 5,
    price: 250,
    ball:5,
    about:
      "Таъсир этиш хусусияти:Ушбу препарат олма қурти, цикадалар, шира, трипс, зарарли хасва, шиллиққурт, олма қурти, баргўрар қуртлар, ўргимчаккана, ғовакловчи пашша, намат канаси, куялар, тут парвонаси ва бошқа бир қатор зараркунандаларни йўқотишда юқори самарали инсектоакарицид",
    img: "https://www.ifoda.uz/uploads/1/Un1SwxJsFbM0Imfw9PTG_Wy_KhGCN3y1.jpg",
  },
  {
    id: 2,
    name: "БЕНТОГРАН",
    price: 270,
    ball: 1,
    count: 3,
    about:
      "Ғалла, маккажўхори, беда ва шолининг фаол ўсув даврида бир йиллик кенг баргли ва кўп йиллик бошоқли (сув хилол) бегона ўтларни йўқотишда қўлланилади.",

    img: "https://www.ifoda.uz/uploads/1/7D57JDpxSIFOB2d_Eh4lIV73D_TNS8Ak.png",
  },
  {
    id: 3,
    name: "DALATE",
    price: 160,
    ball: 3,
    count: 2,
    about:
      "Барча экинлардаги сўрувчи ва кемирувчи зараркунандалар ҳамда каналарга қарши инсектоакарицид. Ғалладаги зарарли хасва, ширалар, трипс, бошқа экинлардаги ўргимчаккана, оққанот, баргўрар қуртлар, каналар, дон қўнғизлари, чигирткалар, тут парвонаси, шиллиққурт, визилдоқ қўнғиз, фитономус, қовун пашшаси, узумбаргўрар қуртлари, мевахўрлар, ва бошқа зараркунандаларга қарши текканда таъсир этувчи самарали восита.",

    img: "https://www.ifoda.uz/uploads/1/nQIkwVhixJx9VwA2hw1Qc2TGvRGeTfyl.jpg",
  },
  {
    id: 4,
    name: "DELTASIS",
    price: 140,
    balls: 2,
    count: 7,
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, deleniti voluptatibus maxime fugit quo molestias ipsa dolorum veniam nisi atque similique nobis ratione odio ut a quaerat aut consectetur molestiae repellat eos. Autem dolore dolor doloremque? Placeat eaque aspernatur non ex, voluptate explicabo id asperiores? Nihil amet esse illum. Velit!",

    img: "https://www.ifoda.uz/uploads/1/XBAMi1lQR-OFTIAFhDvpDg28OCQ0LyKC.jpg",
  },
]);
</script>
<style scoped></style>
