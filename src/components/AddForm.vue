<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';
import { useProductStore } from '../stores/products';
import type { Product } from '../shared/types';
import { useRouter } from 'vue-router';

const router = useRouter();
const productStore = useProductStore();
const nameInput = ref<HTMLInputElement | null>(null);
const newProduct = ref<Product>({
  produto: '', codigo: '',
  codigo_fabrica: '', embalagem: '',
});

function saveNewUser() {
  productStore.products.push(newProduct.value);

  newProduct.value = {
    produto: '', codigo: '',
    codigo_fabrica: '', embalagem: '',
  };  

  router.push('/');
}

onMounted(async () => {
  newProduct.value = {
    produto: '', codigo: '',
    codigo_fabrica: '', embalagem: '',
  };

  await nextTick();
  nameInput.value?.focus();
});
</script>

<template>
  <form class="p-8 flex flex-col bg-[#efeeea] rounded-2xl m-8">
    <h1 class="text-xl self-center font-semibold mb-2 text-deep-navy">
      ADICIONAR EIQUETA
    </h1>

    <div class="flex gap-2">
      <p class="text-xl whitespace-nowrap">
        NOME:
      </p>
      <input
        ref="nameInput"
        v-model="newProduct.produto"
        class="flex-1 min-w-0 text-xl text-bright-marine placeholder:text-bright-marine underline"
      >
    </div>

    <div class="flex gap-2">
      <p class="text-xl whitespace-nowrap">
        CÓDIGO:
      </p>
      <input
        v-model="newProduct.codigo"
        class="flex-1 min-w-0 text-xl text-bright-marine placeholder:text-bright-marine underline"
      >
    </div>

    <div class="flex gap-2">
      <p class="text-xl whitespace-nowrap">
        COD. FÁBRICA:
      </p>
      <input
        v-model="newProduct.codigo_fabrica"
        class="flex-1 min-w-0 text-xl text-bright-marine placeholder:text-bright-marine underline"
      >
    </div>

    <div class="flex gap-2">
      <p class="text-xl whitespace-nowrap">
        EMBALAGEM:
      </p>
      <input
        v-model="newProduct.embalagem"
        class="flex-1 min-w-0 text-xl text-bright-marine placeholder:text-bright-marine underline"
      >
    </div>

    <div class="flex self-center gap-2 mt-3 text-center">
      <button
        class="border-2 bg-sunflower-gold border-sunflower-gold hover:bg-white hover:text-sunflower-gold w-[15vw] h-[5vh] text-white font-bold rounded-xl cursor-pointer flex items-center justify-center"
        @click.prevent="saveNewUser"
      >
        SALVAR
      </button>
    </div>
  </form>
</template>