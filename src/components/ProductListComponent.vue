<script setup lang="ts">
import ListCardComponent from './ListCardComponent.vue';
import ListCartDetailsComponent from './ListCartDetailsComponent.vue';
import { onMounted, ref } from 'vue';
import { useProductStore } from '../stores/products';
import { useRouter } from 'vue-router';

const router = useRouter();
const floatModalHidden = ref(true);
const selectedProductIndex = ref(0);
const productStore = useProductStore();

function openFloatModalHandler(productIndex: number) {
  selectedProductIndex.value = productIndex;
  floatModalHidden.value = !floatModalHidden.value;
}

function changeCard(isNext: boolean) {
  if (isNext && selectedProductIndex.value < productStore.products.length) {
    selectedProductIndex.value++;
  } else if (!isNext && selectedProductIndex.value > 0) {
    selectedProductIndex.value--;
  }
}

function removeProductHandler(productIndex: number) {
  productStore.removeProduct(productIndex);
}

function goToEditView() {
  if (productStore.products.length > 0) {
    router.push('/edit');
  }
}

onMounted(async () => {
  if (!productStore.isLoaded) {
    await productStore.fetchProducts();
  }
});
</script>

<template>
  <main
    class="w-full h-full box-content py-4 flex flex-col items-center"
    @click.stop="floatModalHidden = true"
  >
    <ListCartDetailsComponent
      class="w-[85vw] z-40 fixed rounded-2xl p-8 mt-12"
      :class="{hidden: floatModalHidden}"
      :product-index="selectedProductIndex"
      @previous-card="changeCard(false)"
      @next-card="changeCard(true)"
      @close-card="openFloatModalHandler(selectedProductIndex)"
    />

    <div class="flex items-center gap-2 justify-center w-full mb-2">
      <RouterLink
        class="text-white text-xl font-bold border-dusk-blue border-2 rounded-2xl p-2 bg-dusk-blue hover:bg-[#efeeea] hover:text-dusk-blue cursor-pointer"
        to="/add"
      >
        ADICIONAR
      </RouterLink>
      <button
        class="text-white text-xl font-bold border-sunflower-gold border-2 rounded-2xl p-2 bg-sunflower-gold hover:bg-[#efeeea] hover:text-sunflower-gold cursor-pointer"
        @click.stop="goToEditView"
      >
        EDITAR
      </button>
    </div>

    <div
      v-for="(product, index) in productStore.products"
      :key="product.codigo"
      class="flex items-center px-8 pb-4 w-full"
    >
      <ListCardComponent
        :product
        :product-index="index"
        @open-float-modal="(productIndex) => openFloatModalHandler(productIndex)"
        @remove-product="(productIndex) => removeProductHandler(productIndex)"
      />
    </div>
  </main>
</template>