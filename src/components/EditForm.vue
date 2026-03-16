<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';
import { useProductStore } from '../stores/products';

const productStore = useProductStore();
const selectedProductIndex = ref(0);
const nameInput = ref<HTMLInputElement | null>(null);

function changeSelectedProduct(isNext: boolean) {
  if (isNext && selectedProductIndex.value < productStore.products.length) {
    selectedProductIndex.value++;
  } else if (!isNext && selectedProductIndex.value > 0) {
    selectedProductIndex.value--;
  }
}

onMounted(async () => {
  await productStore.fetchProducts();
  await nextTick();
  nameInput.value?.focus();
});
</script>

<template>
  <form class="box-content p-8 flex flex-col bg-[#efeeea] rounded-2xl m-8">
    <div class="flex gap-2">
      <p class="text-xl">
        NOME:
      </p>
      <input
        ref="nameInput"
        v-model="productStore.products[selectedProductIndex].name"
        class="text-xl text-bright-marine placeholder:text-bright-marine underline"
      >
    </div>

    <div class="flex gap-2">
      <p class="text-xl">
        CÓDIGO:
      </p>
      <input
        v-model="productStore.products[selectedProductIndex].code"
        class="text-xl text-bright-marine placeholder:text-bright-marine underline"
      >
    </div>

    <div class="flex gap-2">
      <p class="text-xl">
        CÓD. FÁBRICA:
      </p>
      <input
        v-model="productStore.products[selectedProductIndex].factoryCode"
        class="text-xl text-bright-marine placeholder:text-bright-marine underline"
      >
    </div>

    <div class="flex gap-2">
      <p class="text-xl">
        EMBALAGEM:
      </p>
      <input
        v-model="productStore.products[selectedProductIndex].package"
        class="text-xl text-bright-marine placeholder:text-bright-marine underline"
      >
    </div>

    <div class="flex self-center gap-2 mt-3">
      <button
        class="border-2 bg-bright-marine border-bright-marine hover:bg-white hover:text-bright-marine w-[10vw] h-[5vh] text-white font-bold rounded-xl cursor-pointer self-center"
        @click.prevent="changeSelectedProduct(false)"
      >
        {{ '<' }}
      </button>
      <button
        class="border-2 bg-bright-marine border-bright-marine hover:bg-white hover:text-bright-marine w-[10vw] h-[5vh] text-white font-bold rounded-xl cursor-pointer self-center"
        @click.prevent="changeSelectedProduct(true)"
      >
        {{ '>' }}
      </button>
    </div>
  </form>
</template>