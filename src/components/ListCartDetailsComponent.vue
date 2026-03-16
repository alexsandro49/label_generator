<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowLeft, faArrowRight, faDownload, faXmark } from '@fortawesome/free-solid-svg-icons';
import PreviewComponent from './PreviewComponent.vue';
import { downloadPDF, printPDF } from '../utils/pdfmake';
import { computed } from 'vue';
import { useProductStore } from '../stores/products';

const emit = defineEmits(['previousCard', 'nextCard', 'closeCard']);

const props = defineProps<{
  productIndex: number
}>();

const productStore = useProductStore();
const pdfName = computed(() => `${productStore.products[props.productIndex].produto.split(' ')[0].toLocaleLowerCase()}-${productStore.products[props.productIndex].codigo}`);
</script>

<template>
  <div class="h-[60vh] bg-white flex flex-col justify-between">
    <div class="flex w-full justify-between items-start">
      <div>
        <h2 class="text-2xl font-semibold mb-1">
          {{ productStore.products[props.productIndex].produto }}
        </h2>
        <p class="mb-2">
          100mm x 50mm
        </p>
      </div>

      <button
        class="min-w-[15%] max-w-[15%] min-h-[5vh] max-h-[5vh] border-2 rounded-xl text-deep-navy hover:bg-bright-marine hover:text-white cursor-pointer  text-xl border-dusk-blue"
        @click.stop="() => emit('closeCard')"
      >
        <FontAwesomeIcon
          :icon="faXmark"
        />
      </button>
    </div>

    <div class="w-full h-[60%] flex flex-col justify-between">
      <PreviewComponent
        class="w-full h-[75%] self-center border-none bg-white"
        :product="productStore.products[props.productIndex]"
      />

      <div class="w-full h-[18%] flex justify-center gap-2">
        <button
          class="w-[15%] border-2 border-dusk-blue rounded-xl font-bold text-dusk-blue hover:bg-bright-marine hover:text-white cursor-pointer"
          @click.stop="emit('previousCard')"
        >
          <FontAwesomeIcon
            :icon="faArrowLeft"
          />
        </button>
        <button
          class="w-[15%] border-2 border-dusk-blue rounded-xl font-bold text-dusk-blue hover:bg-bright-marine hover:text-white cursor-pointer"
          @click.stop="emit('nextCard')"
        >
          <FontAwesomeIcon
            :icon="faArrowRight"
          />
        </button>
      </div>
    </div>

        
    <div class="w-full h-[8%] flex justify-end gap-2">
      <button
        class="w-[15%] border-2 rounded-xl text-deep-navy hover:bg-bright-marine hover:text-white cursor-pointer  text-xl border-dusk-blue"
        @click.stop="() => downloadPDF(pdfName, productStore.products[productIndex])"
      >
        <FontAwesomeIcon
          :icon="faDownload"
        />
      </button>
      <button
        class="w-[25%] border-2 border-dusk-blue rounded-xl bg-bright-marine text-white font-semibold hover:bg-white hover:text-bright-marine cursor-pointer"
        @click.stop="() => printPDF(productStore.products[productIndex])"
      >
        Imprimir
      </button>
    </div>
  </div>
</template>