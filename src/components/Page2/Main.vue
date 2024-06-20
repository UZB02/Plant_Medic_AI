<template>
      <section class="h-[100vh] flex items-center justify-center">
    <div class="container px-3 grid grid-cols-1 md:grid-cols-2 gap-3">
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" class="left flex items-center justify-center">
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
      <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" class="right">
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
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1018%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M887.631%2c501.537C915.664%2c501.162%2c939.901%2c483.962%2c954.066%2c459.767C968.397%2c435.289%2c973.27%2c404.71%2c958.493%2c380.499C944.201%2c357.082%2c915.017%2c349.302%2c887.631%2c350.92C863.15%2c352.366%2c842.978%2c367.332%2c829.923%2c388.093C815.764%2c410.61%2c805.98%2c437.881%2c818.04%2c461.589C831.038%2c487.14%2c858.967%2c501.921%2c887.631%2c501.537' fill='rgba(143%2c 230%2c 10%2c 0.97)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1349.7695634374809 519.3011223145859L1349.9304672813782 350.46565890673526 1220.8463804039134 422.0181366614296z' fill='rgba(143%2c 230%2c 10%2c 0.97)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M382.068%2c476.518C404.783%2c476.068%2c423.567%2c460.585%2c434.647%2c440.751C445.427%2c421.455%2c447.816%2c397.956%2c436.594%2c378.914C425.527%2c360.135%2c403.86%2c352.03%2c382.068%2c351.534C359.208%2c351.013%2c335.06%2c356.862%2c323.063%2c376.328C310.572%2c396.595%2c313.668%2c422.396%2c325.749%2c442.91C337.639%2c463.1%2c358.642%2c476.983%2c382.068%2c476.518' fill='rgba(143%2c 230%2c 10%2c 0.97)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M457.95%2c67.279C473.942%2c68.61%2c492.047%2c68.188%2c501.147%2c54.971C511.18%2c40.399%2c509.452%2c20.724%2c500.516%2c5.455C491.672%2c-9.657%2c475.457%2c-19.156%2c457.95%2c-18.842C440.952%2c-18.537%2c425.291%2c-8.398%2c417.953%2c6.938C411.407%2c20.618%2c417.257%2c36.046%2c425.636%2c48.687C432.995%2c59.789%2c444.677%2c66.174%2c457.95%2c67.279' fill='rgba(143%2c 230%2c 10%2c 0.97)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M173.4421407706142 113.95735509363115L81.25815825715638 240.83772198218531 208.13852514571056 333.0217044956431 300.32250765916837 206.14133760708899z' fill='rgba(143%2c 230%2c 10%2c 0.97)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M100.87042047389701 119.63064341948568L208.24458751043352 88.84159647206339 177.4555405630112-18.53257056447312 70.08137352647472 12.256476382949188z' fill='rgba(143%2c 230%2c 10%2c 0.97)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M655.185%2c481.781C680.426%2c481.398%2c700.312%2c462.418%2c712.328%2c440.217C723.703%2c419.199%2c726.749%2c393.477%2c713.874%2c373.342C701.778%2c354.425%2c677.636%2c350.505%2c655.185%2c350.854C633.51%2c351.191%2c611.521%2c357.031%2c599.57%2c375.117C586.365%2c395.1%2c583.881%2c420.762%2c594.955%2c442C606.878%2c464.866%2c629.4%2c482.173%2c655.185%2c481.781' fill='rgba(143%2c 230%2c 10%2c 0.97)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1059.1014081418837 463.14029099598855L1040.2400370677276 356.17214013006384 933.2718862018029 375.0335112042199 952.133257275959 482.0016620701446z' fill='rgba(143%2c 230%2c 10%2c 0.97)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1018'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: cover;
}

</style>