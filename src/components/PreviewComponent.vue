<script setup lang="ts">
import { onMounted, onUpdated } from 'vue';
import { generatePDF } from '../shared/pdfmake';
import type { Product } from '../shared/types';

const props = defineProps<{
product: Product
}>();

onMounted(() => generatePDF('previewIframe', props.product));
onUpdated(() => generatePDF('previewIframe', props.product));
</script>

<template>
  <iframe
    id="previewIframe"
  />
</template>