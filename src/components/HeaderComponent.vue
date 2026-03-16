<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="bg-deep-navy w-full h-[10vh] px-5 flex items-center justify-between">
    <RouterLink
      class="text-white text-xl font-bold"
      to="/"
    >
      GERENCIADOR DE ETIQUETAS
    </RouterLink>

    <RouterLink
      class="text-white font-bold cursor-pointer"
      to="/edit"
    >
      EDITAR
    </RouterLink>
  </header>
</template>