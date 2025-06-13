<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import MainLayout from "./layout/MainLayout.vue";
import AuthLayout from "./layout/AuthLayout.vue";

const route = useRoute();

const layout = computed(() => {
  const name = route.meta.layout;
  if (name === "auth") return AuthLayout;
  return MainLayout;
});
</script>

<template>
  <component :is="layout" />
</template>
