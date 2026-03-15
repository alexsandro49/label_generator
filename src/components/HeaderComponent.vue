<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
  <header class="bg-deep-navy w-full h-[10vh] px-5 flex items-center justify-between">
    <h1 class="text-white text-2xl font-bold">
      Gerenciador de etiquetas
    </h1>
    <FontAwesomeIcon
      class="text-white text-xl cursor-pointer"
      :icon="faMagnifyingGlass"
    />
  </header>
</template>