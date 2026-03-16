import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Product } from '../shared/types';
import productsJson from '../assets/products.json';

export const useProductStore = defineStore(
  'product',
  () => {
    const products = ref<Product[]>([{} as Product]);

    async function fetchProducts() {
      products.value = productsJson;
    }

    return {
      products,
      fetchProducts,
    };
  }
);