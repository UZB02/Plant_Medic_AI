<template>
      <section class="h-[100vh] flex items-center justify-center">
    <div class="container px-3 grid grid-cols-1 md:grid-cols-2 gap-3">
      <div class="left flex items-center justify-center">
        <div class="card flex items-center justify-center">
          <div class="content flex flex-col items-center justify-center gap-3">
            <h1 class="title font-bold text-6xl lg:text-8xl text-center">
              About Us
            </h1>
            <p class="copy md:w-4/5 w-full">
              A simple and easy-to-use AI-based image classification system for
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              alias ipsum quam quibusdam, voluptatum suscipit, excepturi ut nemo
              rerum cupiditate maxime eveniet aperiam omnis optio blanditiis cum
              sapiente culpa. Fuga?
            </p>
           <div class="md:w-4/5 w-full flex items-center justify-start">
             <button
              class="text-white flex items-center w-full md:w-1/3 mt-3 justify-center gap-1 bg-lime-500 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-base px-4 py-2 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
            >
              Learn More
            </button>
           </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div
          id="default-carousel"
          class="relative w-full"
          data-carousel="slide"
        >
          <!-- Carousel wrapper -->
          <div class="relative h-80 overflow-hidden rounded-lg md:h-96">
            <!-- Item 1 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="../../img/barg-ushlab-turgan-ai.jpg"
                class="absolute  block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="../../img/ai-artificial-intelligence-logo-artificial-intelligence-vector.jpg"
                class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <!-- Item 3 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="../../img/1-rasm.png"
                class="absolute block h-full object-cover w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <!-- Item 4 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="../../img/inovatsia.jpg"
                class="absolute block h-full object-cover w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <!-- Item 5 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="../../img/roboplant.jpg"
                class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
          <!-- Slider indicators -->
          <div
            class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
          >
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
          <!-- Slider controls -->
          <button
            type="button"
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            >
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            >
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>

</script>
<style scoped>
section{
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1173%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M1177.384%2c393.099C1202.241%2c392.528%2c1223.537%2c377.725%2c1236.636%2c356.591C1250.595%2c334.069%2c1256.779%2c307.016%2c1245.64%2c282.974C1232.543%2c254.708%2c1208.537%2c228.869%2c1177.384%2c228.709C1146.042%2c228.548%2c1121.71%2c254.129%2c1107.9%2c282.265C1095.725%2c307.07%2c1098.549%2c336.011%2c1113.226%2c359.423C1126.976%2c381.356%2c1151.504%2c393.693%2c1177.384%2c393.099' fill='rgba(7%2c 232%2c 90%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M94.75205457530038 475.51438269253737L188.40045782218357 505.94259342821135 218.82866855785755 412.29419018132813 125.18026531097436 381.86597944565415z' fill='rgba(7%2c 232%2c 90%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1233.6234924611601 436.9929406494075L1248.0334445658225 320.5508248985863 1152.9366594665175 358.97242007131547z' fill='rgba(7%2c 232%2c 90%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M676.4428727260184 543.4199778581221L772.7863357842439 496.4301312293344 654.1298343119495 375.40985995639016z' fill='rgba(7%2c 232%2c 90%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M828.439%2c469.356C852.274%2c468.503%2c869.307%2c449.365%2c881.527%2c428.883C894.16%2c407.709%2c904.554%2c382.729%2c893.172%2c360.858C881.113%2c337.687%2c854.541%2c325.865%2c828.439%2c326.871C803.958%2c327.814%2c783.884%2c344.221%2c771.805%2c365.535C759.918%2c386.512%2c756.788%2c411.766%2c768.334%2c432.933C780.358%2c454.975%2c803.347%2c470.254%2c828.439%2c469.356' fill='rgba(7%2c 232%2c 90%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M126.17020252541519 239.27525891208757L179.69521731353024 119.05610737421408 59.476065775656735 65.53109258609905 5.951050987541706 185.75024412397252z' fill='rgba(7%2c 232%2c 90%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M301.286%2c210.538C331.936%2c212.405%2c366.471%2c205.258%2c380.899%2c178.151C394.836%2c151.967%2c377.979%2c122.083%2c361.49%2c97.427C347.317%2c76.234%2c326.752%2c60.332%2c301.286%2c59.106C273.443%2c57.765%2c244.184%2c67.032%2c230.124%2c91.101C215.966%2c115.338%2c222.501%2c145.264%2c236.868%2c169.377C250.847%2c192.839%2c274.026%2c208.878%2c301.286%2c210.538' fill='rgba(7%2c 232%2c 90%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M655.975%2c46.156C678.007%2c46.294%2c700.678%2c39.334%2c712.033%2c20.454C723.69%2c1.072%2c720.441%2c-23.018%2c709.477%2c-42.8C698.123%2c-63.287%2c679.359%2c-79.341%2c655.975%2c-80.694C630.153%2c-82.188%2c602.952%2c-72.382%2c590.556%2c-49.681C578.529%2c-27.657%2c586.975%2c-0.968%2c601.123%2c19.758C613.384%2c37.72%2c634.227%2c46.02%2c655.975%2c46.156' fill='rgba(7%2c 232%2c 90%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1173'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: cover;
}

</style>