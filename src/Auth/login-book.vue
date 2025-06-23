<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImxpYmVyaWFuIiwiaWF0IjoxNzUwNjc5MDEwfQ.XDmCEGE3ZMmGaH86SznIcF97MFKRR8sk-UiBOLE2pcw'

const title = ref('')
const description = ref('')
const authorId = ref('')
const categoryId = ref('')
const quantity = ref('')
const createdBy = ref('')

const apiUrl = 'http://localhost:3000/api/books'

async function handleSubmit() {
  if (
    !title.value ||
    !description.value ||
    !authorId.value ||
    !categoryId.value ||
    !quantity.value ||
    !createdBy.value
  ) {
    alert('Please fill all fields')
    return
  }

  const payload = {
    title: title.value,
    description: description.value,
    author_id: Number(authorId.value),
    category_id: Number(categoryId.value),
    quantity: Number(quantity.value),
    created_by: Number(createdBy.value),
  }

  try {
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const errorData = await res.json()
      throw new Error(errorData.message || 'Failed to create book')
    }

    alert('Book created successfully!')

    router.push('/books') // Navigate back to the books list page
  } catch (error) {
    alert(`Error: ${error.message}`)
  }
}

function goBack() {
  router.back() // Or router.push('/books') if you want to always go to /books
}
</script>
<template>
<div class="w-full p-4 mb-6 bg-white h-full">
    <div class="flex p-7 mb-4 h-full">
      <div class="mt-6 ms-6 w-1/2 px-32 py-16 rounded-xl shadow-lg">
        <h1 class="text-2xl font-bold mb-4 p-4 text-center text-blue-600">
          Add New Book
        </h1>
        <form
          class="max-w-sm mx-auto space-y-4"
          @submit.prevent="handleSubmit"
        >
          <div class="mb-5">
            <label
              for="title"
              class="block text-sm font-bold text-gray-700 mb-2"
              >Book Title</label
            >
            <input
              type="text"
              id="title"
              v-model="title"
              class="shadow appearance-none border rounded w-full py-2 px-3"
              placeholder="Data Structures"
              required
            />
          </div>

          <div class="mb-5">
            <label
              for="description"
              class="block text-sm font-bold text-gray-700 mb-2"
              >Description</label
            >
            <input
              type="text"
              id="description"
              v-model="description"
              class="shadow appearance-none border rounded w-full py-2 px-3"
              placeholder="Intro to data structures"
              required
            />
          </div>

          <div class="mb-5">
            <label
              for="authorId"
              class="block text-sm font-bold text-gray-700 mb-2"
              >Author ID</label
            >
            <input
              type="number"
              id="authorId"
              v-model="authorId"
              class="shadow appearance-none border rounded w-full py-2 px-3"
              placeholder="1"
              required
            />
          </div>

          <div class="mb-5">
            <label
              for="categoryId"
              class="block text-sm font-bold text-gray-700 mb-2"
              >Category ID</label
            >
            <input
              type="number"
              id="categoryId"
              v-model="categoryId"
              class="shadow appearance-none border rounded w-full py-2 px-3"
              placeholder="3"
              required
            />
          </div>

          <div class="mb-5">
            <label
              for="quantity"
              class="block text-sm font-bold text-gray-700 mb-2"
              >Quantity</label
            >
            <input
              type="number"
              id="quantity"
              v-model="quantity"
              class="shadow appearance-none border rounded w-full py-2 px-3"
              placeholder="5"
              required
            />
          </div>

          <div class="mb-5">
            <label
              for="createdBy"
              class="block text-sm font-bold text-gray-700 mb-2"
              >Created By (User ID)</label
            >
            <input
              type="number"
              id="createdBy"
              v-model="createdBy"
              class="shadow appearance-none border rounded w-full py-2 px-3"
              placeholder="1"
              required
            />
          </div>

          <button
            type="submit"
            class="text-white bg-blue-700 mt-4 hover:bg-blue-800 rounded-lg text-sm w-full px-3 py-2 text-center"
          >
            Add Book
          </button>
                    <button
            type="button"
            @click="goBack"
            class="text-gray-700 bg-gray-200 mt-4 rounded-lg text-sm w-full px-3 py-2 text-center hover:bg-gray-300"
          >
            Back
          </button>
        </form>
      </div>
      <div class="mt-6 ms-6 w-1/2 px-32 py-16">
        <img class="w-full h-full" src="../assets/image.png" alt="Book Image" />
      </div>
    </div>
  </div>
</template>
