<script setup></script>

<template>
  <div class="w-full  p-4 mb-6 bg-white h-full">
    <div class="flex p-7 mb-4  h-full">
      <div class="mt-6 ms-6 w-1/2 px-32 py-16 rounded-xl shadow-lg">
        <h1 class="text-2xl font-bold mb-4 p-4 text-center text-blue-600">Add  New Book</h1>
      <form class="max-w-sm mx-auto">
        <div class="mb-5">
          <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">BOOK Name</label>
          <input type="text" id="text" class="  text-gray-900 text-sm rounded-lg focus:ring-black-300 focus:border-black-300 block w-full p-2.5 " placeholder="David Goliath" required />
        </div>
        <div class="mb-5">
          <label for="ID" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">ID</label>
          <input type="ID" id="ID" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your  ID" required />
        </div>
        <div class="mb-5">
          <label for="Type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Type</label>
          <input type="text" id="Type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Class" required />
        </div>
       <div class="mb-5">
          <label for="Timeline" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Timeline</label>
          <input type="Timeline" id="Timeline" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your email" required />
       </div>
       <div class="flex items-start mb-5">
       </div>
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Student</button>
      </form>
      </div>
      <div class="mt-6 ms-6 w-1/2 px-32 py-16 ">
        <img class="w-full h-full" src="../assets//new-book.png" alt="">
      </div>

    </div>
    <div>
    <img src="" alt="">
    </div>
  </div>
</template>