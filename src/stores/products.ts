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
      const productToRemove = products.value[productIndex];

      products.value = products.value.filter((product) => product.produto !== productToRemove.produto);
    }

    return {
      products,
      isLoaded,
      fetchProducts,
      removeProduct
    };
  }
);