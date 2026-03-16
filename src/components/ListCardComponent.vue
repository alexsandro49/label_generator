<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBarcode, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faIndustry } from '@fortawesome/free-solid-svg-icons';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import type { Product } from '../utils/types';

const props = defineProps<{
  product: Product,
  productIndex: number
}>();

const emit = defineEmits({
  openFloatModal: (productIndex) => productIndex,
  removeProduct: (productIndex) => productIndex,
});
</script>

<template>
  <div
    class="w-full bg-[#efeeea] rounded-2xl border-dusk-blue border-3 p-4 box-content flex flex-col justify-between"
  >
    <h1
      class="text-2xl font-bold text-[#2f4d60] mb-1 cursor-pointer"
      @click.stop="emit('openFloatModal', productIndex);"
    >
      {{ props.product.produto }}
    </h1>

    <div class="flex gap-6 text-xl font-bold text-[#646464] justify-start">
      <div class="flex items-center">
        <FontAwesomeIcon
          class="text-black text-xl cursor-pointer"
          :icon="faBarcode"
        />
        <p>{{ props.product.codigo }}</p>
      </div>

      <div class="flex items-center">
        <FontAwesomeIcon
          class="text-black text-xl cursor-pointer"
          :icon="faIndustry"
        />
        <p>{{ props.product.codigo_fabrica }}</p>
      </div>

      <div class="flex items-center">
        <FontAwesomeIcon
          class="text-black text-xl cursor-pointer"
          :icon="faBoxOpen"
        />
        <p>{{ props.product.embalagem }}</p>
      </div>
      <FontAwesomeIcon
        class="p-1 border-2 rounded-xl text-deep-navy hover:bg-bright-marine hover:text-white cursor-pointer text-xl border-dusk-blue ml-auto"
        :icon="faTrash"
        @click.stop="emit('removeProduct', props.productIndex)"
      />
    </div>
  </div>
</template>