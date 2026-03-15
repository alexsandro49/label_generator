<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import type { Product } from '../shared/types';
import PreviewComponent from './PreviewComponent.vue';
import { downloadPDF, printPDF } from '../shared/pdfmake';

const emit = defineEmits(['previousCard', 'nextCard']);

const props = defineProps<{
  products: Product[],
  productIndex: number
}>();

const pdfName = `${props.products[props.productIndex].name.split(' ')[0].toLowerCase()}-${props.products[props.productIndex].code}`;
</script>

<template>
  <div class="h-[60vh] bg-white flex flex-col justify-between">
    <div>
      <h2 class="text-2xl font-semibold mb-1">
        {{ props.products[props.productIndex].name }}
      </h2>
      <p class="mb-2">
        100mm x 50mm
      </p>
    </div>

    <div class="w-full h-[60%] flex flex-col justify-between">
      <PreviewComponent
        class="w-full h-[75%] self-center border-none bg-white"
        :product="props.products[props.productIndex]"
      />

      <div class="w-full h-[18%] flex justify-center gap-2">
        <button
          class="w-[15%] border-2 border-dusk-blue rounded-xl font-bold text-dusk-blue hover:bg-bright-marine hover:text-white cursor-pointer"
          @click.stop="emit('previousCard')"
        >
          {{ '<' }}
        </button>
        <button
          class="w-[15%] border-2 border-dusk-blue rounded-xl font-bold text-dusk-blue hover:bg-bright-marine hover:text-white cursor-pointer"
          @click.stop="emit('nextCard')"
        >
          {{ '>' }}
        </button>
      </div>
    </div>

        
    <div class="w-full h-[8%] flex justify-end gap-2">
      <button
        class="w-[15%] border-2 rounded-xl text-deep-navy hover:bg-bright-marine hover:text-white cursor-pointer  text-xl border-dusk-blue"
        @click="() => downloadPDF(pdfName, props.products[productIndex])"
      >
        <FontAwesomeIcon
          :icon="faDownload"
        />
      </button>
      <button
        class="w-[25%] border-2 border-dusk-blue rounded-xl bg-bright-marine text-white font-semibold hover:bg-white hover:text-bright-marine cursor-pointer"
        @click="() => printPDF(props.products[productIndex])"
      >
        Imprimir
      </button>
    </div>
  </div>
</template>