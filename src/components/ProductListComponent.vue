<script setup lang="ts">
import ListCardComponent from './ListCardComponent.vue';
import ListCartDetailsComponent from './ListCartDetailsComponent.vue';
import { onMounted, ref } from 'vue';
import { useProductStore } from '../stores/products';

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

onMounted(async () => {
  await productStore.fetchProducts();
  console.log(productStore.products);
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
    />

    <div
      v-for="(product, index) in productStore.products"
      :key="product.code"
      class="flex items-center px-8 pb-4 w-full"
    >
      <ListCardComponent
        :product
        :product-index="index"
        @open-float-modal="(productIndex) => openFloatModalHandler(productIndex)"
      />
    </div>
  </main>
</template>