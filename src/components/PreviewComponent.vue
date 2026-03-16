<script setup lang="ts">
import { onMounted, onUpdated } from 'vue';
import { generatePDF } from '../utils/pdfmake';
import type { Product } from '../utils/types';

const props = defineProps<{
product: Product
}>();

onMounted(async () => await generatePDF('previewIframe', props.product));
onUpdated(async () => await generatePDF('previewIframe', props.product));
</script>

<template>
  <iframe
    id="previewIframe"
  />
</template>