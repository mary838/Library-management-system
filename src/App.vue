<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import MainLayout from "./layout/MainLayout.vue";
import AuthLayout from "./layout/AuthLayout.vue";

const route = useRoute();

const layoutComponent = computed(() =>
  route.meta.layout === "auth" ? AuthLayout : MainLayout
);
</script>
