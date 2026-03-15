<script setup lang="ts">
import ListCardComponent from './ListCardComponent.vue';
import products from '../assets/products.json';
</script>

<template>
  <main
    class="bg-white w-full h-full box-content py-4"
  >
    <div
      v-for="(product) in products"
      :key="product.code"
      class="flex items-center px-8 pb-4"
    >
      <ListCardComponent :product />
    </div>
  </main>
</template>