<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBarcode } from '@fortawesome/free-solid-svg-icons';
import { faIndustry } from '@fortawesome/free-solid-svg-icons';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import type { Product } from '../shared/types';

const props = defineProps<{
  product: Product,
  productIndex: number
}>();

const emit = defineEmits({
  openFloatModal: (productIndex) => productIndex
});
</script>

<template>
  <div
    class="w-full bg-[#efeeea] rounded-2xl border-dusk-blue border-3 p-4 box-content flex flex-col justify-between"
  >
    <h1
      class="text-2xl font-bold text-[#2f4d60] cursor-pointer"
      @click.stop="emit('openFloatModal', productIndex);"
    >
      {{ props.product.name }}
    </h1>

    <div class="flex gap-6 text-xl font-bold text-[#646464]">
      <div class="flex items-center">
        <FontAwesomeIcon
          class="text-black text-xl cursor-pointer"
          :icon="faBarcode"
        />
        <p>{{ props.product.code }}</p>
      </div>

      <div class="flex items-center">
        <FontAwesomeIcon
          class="text-black text-xl cursor-pointer"
          :icon="faIndustry"
        />
        <p>{{ props.product.factoryCode }}</p>
      </div>

      <div class="flex items-center">
        <FontAwesomeIcon
          class="text-black text-xl cursor-pointer"
          :icon="faBoxOpen"
        />
        <p>{{ props.product.package }}</p>
      </div>
    </div>
  </div>
</template>