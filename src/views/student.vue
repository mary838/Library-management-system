<template>
  <div class="h-screen flex flex-col">
    <!-- Fixed Header -->
    <div class="sticky top-0 z-10 bg-white shadow-md p-4">
      <div
        class="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4"
      >
        <!-- Search Input -->
        <form class="w-full sm:w-96" @submit.prevent>
          <div class="relative">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              v-model="searchName"
              type="search"
              id="default-search"
              class="block w-full ps-10 py-2 text-sm text-gray-900 border border-blue-400 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search students by name or ID card..."
            />
          </div>
        </form>

        <!-- Add Student Button -->
        <router-link
          to="/login-student"
          class="inline-flex cursor-pointer items-center justify-center px-6 py-2 text-sm font-medium text-white bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg shadow hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition"
        >
          Add Student
        </router-link>
      </div>

      <!-- Clear Search Button -->
      <div class="mt-2">
        <button
          v-if="searchName"
          @click="searchName = ''"
          class="bg-gray-300 text-sm px-4 py-1 rounded hover:bg-gray-400 transition"
        >
          Clear Search
        </button>
      </div>
    </div>

    <!-- Table Section -->
    <div class="p-6 overflow-auto flex-grow">
      <table
        class="w-full text-sm text-left text-gray-500 shadow-md sm:rounded-lg"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0 z-0"
        >
          <tr class="bg-white border-b border-gray-200">
            <th scope="col" class="p-4"></th>
            <th scope="col" class="px-6 py-3 text-blue-500">ID Card</th>
            <th scope="col" class="px-6 py-3 text-blue-500">Student Name</th>
            <th scope="col" class="px-6 py-3 text-blue-500">Class</th>
            <th scope="col" class="px-6 py-3 text-blue-500">Actions</th>
          </tr>
        </thead>

        <tbody class="text-gray-900">
          <tr
            v-for="(student, i) in filteredStudents"
            :key="student.id || i"
            class="bg-white border-b border-gray-200 hover:bg-gray-50"
          >
            <td class="w-4 p-4"></td>
            <td class="px-6 py-4">{{ student.id_card || student.id }}</td>
            <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              {{ student.full_name }}
            </th>
            <td class="px-6 py-4">
              {{ classNames[student.student_class] || "Unknown" }}
            </td>
            <td class="px-6 py-4 space-x-2">
              <button
                @click="startUpdate(student)"
                class="inline-flex items-center gap-1 text-sm font-medium text-yellow-800 bg-yellow-100 hover:bg-yellow-200 border border-yellow-300 px-3 py-1 rounded-md transition"
              >
                Update
              </button>
              <button
                @click="deleteStudent(student.id)"
                class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Update Form Modal -->
    <div
      v-if="editingStudent"
      class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 class="text-xl font-bold mb-4">Update Student</h2>
        <form @submit.prevent="submitUpdate">
          <div class="mb-3">
            <label class="block mb-1 font-medium">Full Name</label>
            <input
              v-model="form.full_name"
              type="text"
              class="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div class="mb-3">
            <label class="block mb-1 font-medium">ID Card</label>
            <input
              v-model="form.id_card"
              type="text"
              class="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div class="mb-3">
            <label class="block mb-1 font-medium">Class</label>
            <select
              v-model="form.student_class"
              class="w-full border rounded px-3 py-2"
              required
            >
              <option value="">Select class</option>
              <option value="wmad">WMAD</option>
              <option value="sales">Sales</option>
              <option value="accounting">Accounting</option>
            </select>
          </div>

          <div class="flex justify-end space-x-2">
            <button
              type="button"
              @click="editingStudent = null"
              class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const students = ref([]);
const searchName = ref("");
const editingStudent = ref(null);
const form = ref({
  full_name: "",
  id_card: "",
  student_class: "",
});

const classNames = {
  wmad: "WMAD",
  sales: "Sales",
  accounting: "Accounting",
};

const fetchAllStudents = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(
      "http://localhost:3000/api/students?page=1&limit=100",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();

    students.value = (data?.students || []).map((s) => ({
      ...s,
      student_class: s.class?.toLowerCase(), // normalize
    }));
  } catch (err) {
    console.error("Failed to fetch students", err);
  }
};

const filteredStudents = computed(() => {
  const term = searchName.value.trim().toLowerCase();
  if (!term) return students.value;
  return students.value.filter((student) => {
    return (
      student.full_name.toLowerCase().includes(term) ||
      (student.id_card && student.id_card.toLowerCase().includes(term))
    );
  });
});

const deleteStudent = async (id) => {
  if (!confirm("Are you sure you want to delete this student?")) return;

  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`http://localhost:3000/api/students/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("Delete failed");

    await fetchAllStudents();
  } catch (err) {
    alert("Failed to delete student.");
    console.error(err);
  }
};

const startUpdate = (student) => {
  editingStudent.value = student;
  form.value = {
    full_name: student.full_name,
    id_card: student.id_card,
    student_class: student.student_class || "",
  };
};

const submitUpdate = async () => {
  if (!editingStudent.value) return;

  try {
    const token = localStorage.getItem("token");
    const res = await fetch(
      `http://localhost:3000/api/students/${editingStudent.value.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form.value),
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Update failed:", res.status, errorText);
      throw new Error("Update failed");
    }

    await fetchAllStudents();
    editingStudent.value = null;
  } catch (err) {
    alert("Failed to update student.");
    console.error(err);
  }
};

onMounted(fetchAllStudents);
</script>
