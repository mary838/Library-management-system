<script setup></script>

<template>
  <div class="w-full  p-4 mb-6 bg-white h-full">
    <div class="flex p-7 mb-4  h-full">
      <div class="mt-6 ms-6 w-1/2 px-32 py-16 rounded-xl shadow-lg">
        <h1 class="text-2xl font-bold mb-4 p-4 text-center text-blue-600">Add  New Book</h1>
        <form class="max-w-sm mx-auto space-y-4">
           <div class="mb-5">
             <label for="Name" class="block text-sm font-bold text-gray-700 mb-2">Book Name </label>
             <input type="text" id="text" class="shadow appearance-none border rounded w-full py-2 px-3" required placeholder="David Goliath" />
           </div>
           <div class="mb-5">
             <label for="user-id" class="block text-sm font-bold text-gray-700 mb-2">user-id</label>
             <input type="Number" id="Number" class="shadow appearance-none border rounded w-full py-2 px-3" placeholder="Enter Your ID" required />
           </div>
           <div class="mb-5">
             <label for="message" class="block text-sm font-bold text-gray-700 mb-2">Type</label>
             <input type="text" id="text" class="shadow appearance-none border rounded w-full py-2 px-3" required placeholder="Enter Your Type" />
           </div>
           <div class="mb-5">
             <label for="message" class="block text-sm font-bold text-gray-700 mb-2"> Timeline</label >
             <input type="text" id="text" class="shadow appearance-none border rounded w-full py-2 px-3" required placeholder="Enter Your Timeline"/>
           </div>
           <button type="submit" class="text-white bg-blue-700 mt-4 hover:bg-blue-800  rounded-lg text-sm  w-full px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Add Book</button>
        </form>
      </div>
      <div class="mt-6 ms-6 w-1/2 px-32 py-16 ">
        <img class="w-full h-full" src="../assets/image.png" alt="">
      </div>
    </div>
  </div>
</template>