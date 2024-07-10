<template>
    <section class="py-8">
    <div
      class="container h-full flex items-center relative justify-center flex-col"
    >
      <div class="left w-full flex items-center justify-center">
        <div class="w-full flex items-center justify-center">
          <div
            class="content w-full flex flex-col items-center justify-center gap-3"
          >
            <h1 class="title font-bold text-6xl lg:text-8xl text-center">
              Contact Us
            </h1>
          </div>
        </div>
      </div>
      <div class="right p-4 gap-4 md:gap-0 flex flex-col md:flex-row items-center justify-around w-full">
        <div class="w-full md:w-[75%]">
            <form class="w-full md:w-4/5 mx-auto">
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required />
        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
  <div class="grid w-full">
    <div class="relative z-0 w-full mb-5 group">
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required />
        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (+99890-123-45-67)</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
<textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-lime-500 focus:border-lime-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500" placeholder="Write your message..."></textarea>
    </div>
    <button type="submit" class="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800">Submit</button>
  </div>
</form>
        </div>
        <div class="w-full md:w-1/4">
            <div class="card h-[345px] rounded-lg bg-lime-500 flex flex-col gap-4 p-6 w-full">
              <div class="location flex items-center justify-center gap-2">
                <svg width="24" height="24" fill="#ecfccb" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22 11.414v12.586h-20v-12.586l-1.293 1.293-.707-.707 12-12 12 12-.707.707-1.293-1.293zm-6 11.586h5v-12.586l-9-9-9 9v12.586h5v-9h8v9zm-1-7.889h-6v7.778h6v-7.778z"/></svg>
                <h1 class="w-[90%] text-lime-100 font-bold">Namangan, Namangan City, Uzbekistan</h1>
              </div>
              <div class="tell flex gap-3 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ecfccb" width="24" height="24" viewBox="0 0 24 24"><path d="M3.59 1.322l2.844-1.322 4.041 7.89-2.725 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.861 3.591-19.101-18.258-11.384-22.281zm1.93 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398zm7.832 7.649l2.917.87c.223-.747.16-1.579-.24-2.317-.399-.739-1.062-1.247-1.808-1.469l-.869 2.916zm1.804-6.059c1.551.462 2.926 1.516 3.756 3.051.831 1.536.96 3.263.498 4.813l-1.795-.535c.325-1.091.233-2.306-.352-3.387-.583-1.081-1.551-1.822-2.643-2.146l.536-1.796zm.95-3.186c2.365.705 4.463 2.312 5.729 4.656 1.269 2.343 1.466 4.978.761 7.344l-1.84-.548c.564-1.895.406-4.006-.608-5.882-1.016-1.877-2.696-3.165-4.591-3.729l.549-1.841z"/></svg>
                <div class="numbers">
                  <h1 class="text-lime-100 font-bold">+998 (90) 535 35 53</h1>
                  <h1 class="text-lime-100 font-bold">+998 (90) 535 35 53</h1>
                  <h1 class="text-lime-100 font-bold">+998 (90) 535 35 53</h1>
                  <h1 class="text-lime-100 font-bold">+998 (90) 535 35 53</h1>
                </div>
              </div>
              <div class="email flex gap-2">
                <svg width="24" height="24" fill="#ecfccb" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"/></svg>
                <span class="flex flex-col">
                  <a class="text-lime-100 font-bold"  href="mailto:Jyvqy@example.com">plantanaliz@gmail.com</a>
                  <a class="text-lime-100 font-bold" href="mailto:Jyvqy@example.com">Istalgan vaqtda xabar jo'natish!</a>
                </span>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
</script>
<style scoped>
    
</style>