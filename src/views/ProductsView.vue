<template>
  <Nav></Nav>
   <span @click="(()=>{router.push('/basket')})" class="flex fixed bottom-[10%] w-12 h-12 rounded-full animate-pulse z-50 bg-lime-500 right-5 items-center justify-center gap-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="#fff" height="24" viewBox="0 0 24 24"><path d="M10 20.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-17l-3.431 14h-2.102l2.541-11h-16.812l4.615 13h13.239l3.474-14h2.178l.494-2h-4.196z"/></svg>
                <h1 class="text-white absolute bottom-[55%] right-5">{{ counts }}</h1>
              </span>
  <section class="">
    <div class="container flex flex-col  justify-center">
        <div class="top font-bold border-b-2 flex flex-col gap-2 md:flex-row items-center justify-between py-6 text-center">
          <div class="left w-[20%] text-start">
            <h1 class="text-center text-3xl">Products</h1>
          </div>
          <div class="right flex gap-2 items-center justify-between px-1 w-full md:w-[80%]">
            <div class="md:w-1/2 ">
<form class="max-w-lg mx-auto">
    <div class="flex">
        <div class="relative ">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-2 border border-gray-300 focus:ring-lime-500 focus:border-lime-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-lime-500" placeholder="Search Mockups, Logos, Design Templates..." required />
            <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-lime-700 rounded-e-lg border border-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>
            </div>
            <div class="md:w-1/2  flex gap-2 items-center justify-between">
<form class="max-w-sm  mx-auto">
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500">
    <option selected>Choose a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
</form>
            </div>
          </div>
      </div>
       <div class="flex md:flex-row flex-col">
        <div class="filter md:flex flex-col hidden  items-center gap-3 py-3 border-r-2 pr-3 w-[20%]">
        <span><h1 class="text-center text-3xl">Kategoriyalar</h1></span>
        <div class="flex md:flex-col flex-wrap">
              <article @click="router.push('/products')" class="flex cursor-pointer hover:bg-gray-100 w-full rounded-lg items-center justify-center">
          <span class="flex w-full p-2 items-center justify-center gap-3">
            <div class="left border rounded-sm w-10 h-10 flex items-center justify-center"><img src="https://www.ifoda.uz/uploads/1/KsWmsmK4ho6oCPfkQI_z90lhY7DRwoWn.png" alt=""></div>
            <div class="right w-1/2"><h1 class="font-sans font-medium text-base ">Gerbitsitlar</h1></div>
          </span>
        </article>
        <article class="flex cursor-pointer hover:bg-gray-100 w-full rounded-lg items-center justify-center">
          <span class="flex w-full p-2 items-center justify-center gap-3">
            <div class="left border rounded-sm w-10 h-10 flex items-center justify-center"><img src="https://www.ifoda.uz/uploads/1/TpVmdbLuYKCzxt3RLEDGlh7anXBy-4kS.png" alt=""></div>
            <div class="right w-1/2"><h1 class="font-sans font-medium text-base ">Fungitsidlar</h1></div>
          </span>
        </article>
        <article class="flex cursor-pointer hover:bg-gray-100 w-full rounded-lg items-center justify-center">
          <span class="flex w-full p-2 items-center justify-center gap-3">
            <div class="left border rounded-sm w-10 h-10 flex items-center justify-center"><img src="https://www.ifoda.uz/uploads/1/mlweQTSUHoYqHDmMuxN00Gzl7CRkwQlJ.png" alt=""></div>
            <div class="right w-1/2"><h1 class="font-sans font-medium text-base ">Insektitsidlar</h1></div>
          </span>
        </article>
        <article class="flex cursor-pointer hover:bg-gray-100 w-full rounded-lg items-center justify-center">
          <span class="flex w-full p-2 items-center justify-center gap-3">
            <div class="left border rounded-sm w-10 h-10 flex items-center justify-center"><img src="https://www.ifoda.uz/uploads/1/GPJIsdWj7MdvTd-nEGpOMoAMGtWARzsz.png" alt=""></div>
            <div class="right w-1/2"><h1 class="font-sans font-medium text-base ">Nematsidlar</h1></div>
          </span>
        </article>
        <article class="flex cursor-pointer hover:bg-gray-100 w-full rounded-lg items-center justify-center">
          <span class="flex w-full p-2 items-center justify-center gap-3">
            <div class="left border rounded-sm w-10 h-10 flex items-center justify-center"><img src="https://www.ifoda.uz/uploads/1/Eboen0JUt9xRJeq7eyVOo3qyzqkIrK2i.png" alt=""></div>
            <div class="right w-1/2"><h1 class="font-sans font-medium text-base ">Stimulyatorlar</h1></div>
          </span>
        </article>
        <article class="flex cursor-pointer hover:bg-gray-100 w-full rounded-lg items-center justify-center">
          <span class="flex w-full p-2 items-center justify-center gap-3">
            <div class="left border rounded-sm w-10 h-10 flex items-center justify-center"><img src="https://www.ifoda.uz/uploads/1/BxiVZ1G6pEbXwCqnycNUtilwGcOa4Ncg.png" alt=""></div>
            <div class="right w-1/2"><h1 class="font-sans font-medium text-base ">Akaratsidlar</h1></div>
          </span>
        </article>
        </div>
      </div>
      <div
        class="bottom p-2 flex md:flex-row flex-col flex-wrap items-center justify-center gap-2"
      >
        <div
          v-for="(item, index) in data"
          :key="index"
          class="md:w-[30%] w-4/5 max-w-[85%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#" @click.prevent="openModal(item)">
            <img
              class="w-full transition hover:scale-95 md:h-96 h-96  rounded-t-lg"
              :src="item.img"
              alt="product image"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5
                class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
              >
                {{ item.name }}
              </h5>
            </a>
            <div class="flex flex-wrap items-center mt-2.5 mb-2">
              <h3 class="text-lime-500 underline cursor-pointer dark:text-white">Batafsil</h3>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-gray-900 dark:text-white"
                >${{ item.price }}</span
              >
            <span class="flex items-center justify-center gap-2">
              <button @click="remove(item.id)" class="w-8 h-8 text-center bg-lime-500 rounded-full text-white font-bold text-xl">-</button>
              <span>{{ item.count }}</span>
              <button @click="add(item.id)" class="w-8 h-8 text-center bg-lime-500 rounded-full text-white font-bold text-xl">+</button>
            </span>
            </div>
          </div>
        </div>
      </div>
       </div>
    </div>
    <Modal
      v-if="showModal"
      :show="showModal"
      :product="selectedProduct"
      @close="closeModal"
    />
  </section>
  <!-- <div class="mt-5 shadow-xl w-[200px] absolute bottom-0 right-0 flex items-center justify-center gap-3">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.029 13h2.971l-.266 1h-2.992l.287-1zm.863-3h2.812l.296-1h-2.821l-.287 1zm-.576 2h4.387l.297-1h-4.396l-.288 1zm2.684-9l-.743 2h-1.929l-3.474 12h-11.239l-4.615-11h14.812l-.564 2h-11.24l2.938 7h8.428l3.432-12h4.194zm-14.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm5.9-7-.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"/></svg>
                    </button>
                </div> -->
</template>
<script setup>
import router from "@/router";
import Nav from "@/components/Nav/Main.vue";
import { ref } from "vue";
import Modal from "../components/Modal/Main.vue";

const counts = ref(localStorage.getItem("counts"));

const showModal = ref(false);
const selectedProduct = ref({});
const openModal = (product) => {
  selectedProduct.value = product;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedProduct.value = {};
};

const data = ref([
  {
    id: 1,
    name: "AGROFOS-D",
    count: 0,
    price: 50,
    ball:5,
    about:
      "Таъсир этиш хусусияти:Ушбу препарат олма қурти, цикадалар, шира, трипс, зарарли хасва, шиллиққурт, олма қурти, баргўрар қуртлар, ўргимчаккана, ғовакловчи пашша, намат канаси, куялар, тут парвонаси ва бошқа бир қатор зараркунандаларни йўқотишда юқори самарали инсектоакарицид",
    img: "https://www.ifoda.uz/uploads/1/Un1SwxJsFbM0Imfw9PTG_Wy_KhGCN3y1.jpg",
  },
  {
    id: 2,
    name: "БЕНТОГРАН",
    price: 90,
    ball: 1,
    count: 0,
    about:
      "Ғалла, маккажўхори, беда ва шолининг фаол ўсув даврида бир йиллик кенг баргли ва кўп йиллик бошоқли (сув хилол) бегона ўтларни йўқотишда қўлланилади.",

    img: "https://www.ifoda.uz/uploads/1/7D57JDpxSIFOB2d_Eh4lIV73D_TNS8Ak.png",
  },
  {
    id: 3,
    name: "DALATE",
    price: 85,
    ball: 3,
    count: 0,
    about:
      "Барча экинлардаги сўрувчи ва кемирувчи зараркунандалар ҳамда каналарга қарши инсектоакарицид. Ғалладаги зарарли хасва, ширалар, трипс, бошқа экинлардаги ўргимчаккана, оққанот, баргўрар қуртлар, каналар, дон қўнғизлари, чигирткалар, тут парвонаси, шиллиққурт, визилдоқ қўнғиз, фитономус, қовун пашшаси, узумбаргўрар қуртлари, мевахўрлар, ва бошқа зараркунандаларга қарши текканда таъсир этувчи самарали восита.",

    img: "https://www.ifoda.uz/uploads/1/nQIkwVhixJx9VwA2hw1Qc2TGvRGeTfyl.jpg",
  },
  {
    id: 4,
    name: "DELTASIS",
    price: 20,
    balls: 2,
    count: 0,
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, deleniti voluptatibus maxime fugit quo molestias ipsa dolorum veniam nisi atque similique nobis ratione odio ut a quaerat aut consectetur molestiae repellat eos. Autem dolore dolor doloremque? Placeat eaque aspernatur non ex, voluptate explicabo id asperiores? Nihil amet esse illum. Velit!",

    img: "https://www.ifoda.uz/uploads/1/XBAMi1lQR-OFTIAFhDvpDg28OCQ0LyKC.jpg",
  },
  {
    id: 5,
    name: "ENTOJEAN",
    price: 60,
    balls: 5,
    count: 0,
    about:
      "Ушбу препарат ғўза ғовлаб кетишининг олдини олади. Бунинг натижасида ғўзанинг пастки қисмида асосий кўсаклар пайдо бўлиб, улар эрта очилади ва юқори ҳосил олишга имконият яратилади",

    img: "https://www.ifoda.uz/uploads/1/0M7t6vYinEQXEZb8_RpvvaeAy43wkobF.jpg",
  },
  {
    id: 6,
    name: "ENTOXLOROK",
    price: 5,
    count: 0,
    ball: 4,
    about:
      "Замбуруғли касалликлардан ҳимоя қилувчи ва даволовчи фунгицид. Картошкадаги фитофитороз, альтернариоз, токдаги мильдю, бодрингдаги пероноспороз, помидордаги фитофитороз, макроспориоз, касалликларига қарши юқори самара беради. Таркибида икки хил таъсир этувчи моддаси  борлиги бошқа фунгицидларга чидамлилиги ошган касалликларни ҳам даволайди. Препарат қўлланилгандан сўнг ўсимликларни ўсиш ва ривожланишига зарарли таъсир этмайди.!",

    img: "https://www.ifoda.uz/uploads/1/k24tXqOWMM-vIzQKosJnsUBexE8CfqAf.jpg",
  },
]);

const add = ((id) => {
  const item = data.value.find((product) => product.id === id);
  if (item) {
    item.count++;
    console.log(item);

    // Tanlangan mahsulotlarni `localStorage` ga saqlash
    let selectedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const existingProductIndex = selectedProducts.findIndex(product => product.id === id);

    if (existingProductIndex !== -1) {
      selectedProducts[existingProductIndex].count = item.count;
    } else {
      selectedProducts.push({ ...item });
    }

    localStorage.setItem("products", JSON.stringify(selectedProducts));
  }
    let selectedProducts = JSON.parse(localStorage.getItem("products")) || [];
  counts.value = selectedProducts.reduce((total, product) => total + product.count, 0);
  localStorage.setItem("counts", JSON.stringify(counts.value));
  console.log('Buy count:', buy.value);
});

const remove = ((id) => {
  const item = data.value.find((product) => product.id === id);
  if (item && item.count > 0) {
    item.count--;

    // Tanlangan mahsulotlarni `localStorage` ga saqlash
    let selectedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const existingProductIndex = selectedProducts.findIndex(product => product.id === id);

    if (existingProductIndex !== -1) {
      if (item.count > 0) {
        selectedProducts[existingProductIndex].count = item.count;
      } else {
        selectedProducts.splice(existingProductIndex, 1); // Mahsulotni ro'yxatdan o'chirish
      }
    }

    localStorage.setItem("products", JSON.stringify(selectedProducts));
  }
    let selectedProducts = JSON.parse(localStorage.getItem("products")) || [];
  counts.value = selectedProducts.reduce((total, product) => total + product.count, 0);
  console.log('counts:', counts.value);
});
</script>
<style scoped></style>
