<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBarcode } from '@fortawesome/free-solid-svg-icons';
import { faIndustry } from '@fortawesome/free-solid-svg-icons';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';

const props = defineProps<{
  product: { name: string,
  code: number,
  factoryCode: number,
  package: string};
}>();
</script>

<template>
  <div class="w-full flex gap-5 box-content bg-[#A3AFC4] h-20 rounded-2xl border-dusk-blue border-3 p-4">
    <input
      class="w-6 accent-dusk-blue"
      type="checkbox"
      name="statusCheckbox"
    >

    <span class="box-content h-18 flex flex-col justify-between">
      <h1 class="text-2xl font-bold text-[#2f4d60]">{{ props.product.name }}</h1>

      <span class="flex gap-6 text-xl font-bold text-[#646464]">
        <span class="flex items-center">
          <FontAwesomeIcon
            class="text-black text-xl cursor-pointer"
            :icon="faBarcode"
          />
          <p>{{ props.product.code }}</p>
        </span>

        <span class="flex items-center">
          <FontAwesomeIcon
            class="text-black text-xl cursor-pointer"
            :icon="faIndustry"
          />
          <p>{{ props.product.factoryCode }}</p>
        </span>

        <span class="flex items-center">
          <FontAwesomeIcon
            class="text-black text-xl cursor-pointer"
            :icon="faBoxOpen"
          />
          <p>{{ props.product.package }}</p>
        </span>
      </span>
    </span>
  </div>
</template>