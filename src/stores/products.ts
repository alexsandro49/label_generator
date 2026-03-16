import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Product } from '../shared/types';
import productsJson from '../assets/products.json';

export const useProductStore = defineStore(
  'product',
  () => {
    const products = ref<Product[]>([{} as Product]);
    const isLoaded = ref(false);

    async function fetchProducts() {
      products.value = productsJson;

      isLoaded.value = true;
    }

    function removeProduct(productIndex: number) {
      products.value.splice(productIndex, 1);
    }

    return {
      products,
      isLoaded,
      fetchProducts,
      removeProduct
    };
  }
);