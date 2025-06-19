<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const chartData = {
  labels: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"],
  datasets: [
    {
      label: "Students per Class",
      backgroundColor: "#3b82f6",
      data: [5, 8, 7, 6, 4],
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Class-wise Student Distribution" },
  },
};
</script>

<template>
  <div class="max-w-4xl mx-auto p-14">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>
