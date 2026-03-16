<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';
import { useProductStore } from '../stores/products';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useRouter } from 'vue-router';

const router = useRouter();
const productStore = useProductStore();
const selectedProductIndex = ref(0);
const nameInput = ref<HTMLInputElement | null>(null);

function changeSelectedProduct(isNext: boolean) {
  if (isNext && selectedProductIndex.value < productStore.products.length - 1) {
    selectedProductIndex.value++;
  } else if (!isNext && selectedProductIndex.value > 0) {
    selectedProductIndex.value--;
  }
}

onMounted(async () => {
  await nextTick();
  nameInput.value?.focus();
});
</script>

<template>
  <form class="p-8 flex flex-col bg-[#efeeea] rounded-2xl m-8">
    <h1 class="text-xl self-center font-semibold mb-2 text-deep-navy">
      EDITAR EIQUETA
    </h1>

    <div class="flex gap-2">
      <p class="text-xl whitespace-nowrap">
        NOME:
      </p>
      <input
        ref="nameInput"
        v-model="productStore.products[selectedProductIndex].produto"
        class="flex-1 min-w-0 text-xl text-bright-marine placeholder:text-bright-marine underline"
      >
    </div>

    <div class="flex gap-2">
      <p class="text-xl whitespace-nowrap">
        CÓDIGO:
      </p>
      <input
        v-model="productStore.products[selectedProductIndex].codigo"
        class="flex-1 min-w-0 text-xl text-bright-marine placeholder:text-bright-marine underline"
      >
    </div>

    <div class="flex gap-2">
      <p class="text-xl whitespace-nowrap">
        COD. FÁBRICA:
      </p>
      <input
        v-model="productStore.products[selectedProductIndex].codigo_fabrica"
        class="flex-1 min-w-0 text-xl text-bright-marine placeholder:text-bright-marine underline"
      >
    </div>

    <div class="flex gap-2">
      <p class="text-xl whitespace-nowrap">
        EMBALAGEM:
      </p>
      <input
        v-model="productStore.products[selectedProductIndex].embalagem"
        class="flex-1 min-w-0 text-xl text-bright-marine placeholder:text-bright-marine underline"
      >
    </div>

    <div class="flex self-center gap-2 mt-3 text-center">
      <button
        class="border-2 bg-bright-marine border-bright-marine hover:bg-white hover:text-bright-marine w-[10vw] h-[5vh] text-white font-bold rounded-xl cursor-pointer self-center"
        @click.prevent="changeSelectedProduct(false)"
      >
        <FontAwesomeIcon
          :icon="faArrowLeft"
        />
      </button>
      <button
        class="border-2 bg-bright-marine border-bright-marine hover:bg-white hover:text-bright-marine w-[10vw] h-[5vh] text-white font-bold rounded-xl cursor-pointer"
        @click.prevent="changeSelectedProduct(true)"
      >
        <FontAwesomeIcon
          :icon="faArrowRight"
        />
      </button>
      <button
        class="border-2 bg-sunflower-gold border-sunflower-gold hover:bg-white hover:text-sunflower-gold w-[15vw] h-[5vh] text-white font-bold rounded-xl cursor-pointer flex items-center justify-center"
        @click.prevent="router.push('/')"
      >
        SALVAR
      </button>
    </div>
  </form>
</template>