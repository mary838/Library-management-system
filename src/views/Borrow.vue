<script setup>
import { ref } from "vue";

const students = ref([]);

const form = ref({
  full_name: "",
  id_card: "",
  student_class: "",
  id: null, // for update
});

const fetchAllStudents = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/students");
    const data = await res.json();
    students.value = data.students || data;
  } catch (err) {
    console.error("Error fetching all students:", err);
  }
};

const fetchPaginatedStudents = async () => {
  try {
    const res = await fetch(
      "http://localhost:3000/api/students?page=1&limit=10"
    );
    const data = await res.json();
    students.value = data.students || data;
  } catch (err) {
    console.error("Error fetching paginated students:", err);
  }
};

const fetchStudentById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/students/${id}`);
    const data = await res.json();
    students.value = [data];
    // Auto-fill form for editing
    form.value = {
      full_name: data.full_name,
      id_card: data.id_card,
      student_class: data.student_class,
      id: data.id,
    };
  } catch (err) {
    console.error(`Error fetching student ID ${id}:`, err);
  }
};

const createStudent = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form.value),
    });
    await res.json();
    fetchAllStudents();
    form.value = { full_name: "", id_card: "", student_class: "", id: null };
  } catch (err) {
    console.error("Error creating student:", err);
  }
};

const updateStudent = async () => {
  if (!form.value.id) return;
  try {
    const res = await fetch(
      `http://localhost:3000/api/students/${form.value.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form.value),
      }
    );
    await res.json();
    fetchAllStudents();
    form.value = { full_name: "", id_card: "", student_class: "", id: null };
  } catch (err) {
    console.error("Error updating student:", err);
  }
};

const deleteStudent = async (id) => {
  if (!confirm("Are you sure to delete this student?")) return;
  try {
    await fetch(`http://localhost:3000/api/students/${id}`, {
      method: "DELETE",
    });
    fetchAllStudents();
  } catch (err) {
    console.error(`Error deleting student ${id}:`, err);
  }
};
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Student Table</h1>

    <!-- Action Buttons -->
    <div class="mb-4 flex gap-3 flex-wrap">
      <button @click="fetchAllStudents" class="btn">Fetch All</button>
      <button @click="fetchPaginatedStudents" class="btn">
        Paginated (10)
      </button>
      <button @click="fetchStudentById(11)" class="btn">Fetch ID 11</button>
      <button @click="fetchStudentById(6)" class="btn">Fetch ID 6</button>
    </div>

    <!-- Create/Update Form -->
    <div class="mb-6 space-y-2">
      <input
        v-model="form.full_name"
        type="text"
        placeholder="Full Name"
        class="input"
      />
      <input
        v-model="form.id_card"
        type="text"
        placeholder="ID Card"
        class="input"
      />
      <input
        v-model="form.student_class"
        type="text"
        placeholder="Class"
        class="input"
      />
      <div class="flex gap-2">
        <button
          @click="createStudent"
          class="btn bg-green-600 hover:bg-green-700"
        >
          {{ form.id ? "Create New" : "Create" }}
        </button>
        <button
          @click="updateStudent"
          v-if="form.id"
          class="btn bg-yellow-500 hover:bg-yellow-600"
        >
          Update
        </button>
      </div>
    </div>

    <!-- Student Table -->
    <div class="overflow-auto">
      <table
        class="w-full text-sm text-left text-gray-500 shadow-md sm:rounded-lg"
      >
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0">
          <tr>
            <th class="px-4 py-2">ID</th>
            <th class="px-4 py-2">Full Name</th>
            <th class="px-4 py-2">ID Card</th>
            <th class="px-4 py-2">Class</th>
            <th class="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="student in students"
            :key="student.id"
            class="bg-white border-b"
          >
            <td class="px-4 py-2">{{ student.id }}</td>
            <td class="px-4 py-2">{{ student.full_name }}</td>
            <td class="px-4 py-2">{{ student.id_card }}</td>
            <td class="px-4 py-2">{{ student.student_class }}</td>
            <td class="px-4 py-2 space-x-2">
              <button
                @click="fetchStudentById(student.id)"
                class="btn btn-sm bg-blue-500 hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                @click="deleteStudent(student.id)"
                class="btn btn-sm bg-red-600 hover:bg-red-700"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.btn {
  background-color: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}
.btn:hover {
  background-color: #1e40af;
}
.input {
  display: block;
  width: 100%;
  max-width: 300px;
  padding: 0.5rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.375rem;
}
.btn-sm {
  padding: 0.3rem 0.75rem;
  font-size: 0.75rem;
}
</style>
