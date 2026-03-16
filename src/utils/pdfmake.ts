import base64Image from '../assets/base64Image';
import type { TDocumentDefinitions } from 'pdfmake/interfaces';
import { convertMmToPt } from './shared';
import type { Product } from './types';

export async function generatePDF(value: string, product: Product) {
  pdfMake.createPdf(docDefinition(product)).getBlob().then((blob: Blob) => {
    const frame = document.getElementById(value) as HTMLIFrameElement;

    if (frame!.src) {
      URL.revokeObjectURL(frame.src);
    }

    const urlParams = '#toolbar=0&navpanes=0&scrollbar=0&view=Fit';
    frame!.src = URL.createObjectURL(blob) + urlParams;

  });
}

export async function downloadPDF(productName: string, product: Product) {
  pdfMake.createPdf(docDefinition(product)).download(`etiqueta-${productName}.pdf`);
};

export async function printPDF(product: Product) {
  pdfMake.createPdf(docDefinition(product)).print();
};

export function docDefinition(product: Product): TDocumentDefinitions {
  return {
    pageSize: {
      width: convertMmToPt(100),
      height: convertMmToPt(50),
    },
    pageMargins: [
      convertMmToPt(6.1),
      convertMmToPt(3.73),
      convertMmToPt(2.43),
      convertMmToPt(2.37),
    ],

    content: [
      {
        layout: {
          defaultBorder: false,
          fillColor: (rowIndex: number, _: any, columnIndex: number) =>
            rowIndex == 3 && columnIndex % 2 == 0 ? '#c0c0c0' : null,
          paddingTop: () => 0,
          paddingBottom: (rowIndex: number) => (rowIndex == 0 ? 1 : 0),
          paddingLeft: () => 0,
          paddingRight: () => 0,
        },
        style: 'bottomTable',
        table: {
          dontBreakRows: true,
          widths: ['auto', '*', 'auto', '*', 'auto'],
          body: [
            [
              {
                image: base64Image,
                alignment: 'left',
                fit: [convertMmToPt(52.92), convertMmToPt(12.7)],
                colSpan: 5,
              },
              {},
              {},
              {},
              {},
            ],
            [
              {
                text: product.produto,
                style: 'header',
                colSpan: 5,
              },
              {},
              {},
              {},
              {},
            ],
            [
              { text: 'CODIGO', alignment: 'center' },
              {},
              { text: 'COD FABRICA', alignment: 'center' },
              {},
              { text: 'EMBALAGEM', alignment: 'center' },
            ],
            [
              {
                text: product.codigo,
                bold: true,
                alignment: 'center',
                fontSize: 15,
                margin: [0, -3, 0, -3],
              },
              {},
              {
                text: product.codigo_fabrica,
                bold: true,
                alignment: 'center',
                fontSize: 15,
                margin: [0, -3, 0, -3],
              },
              {},
              {
                text: product.embalagem,
                bold: true,
                alignment: 'center',
                fontSize: 15,
                margin: [0, -3, 0, -3],
              },
            ],
          ],
        },
      },
    ],
    styles: {
      header: {
        fontSize: 17.5,
        bold: true,
        margin: [0, convertMmToPt(3)],
      },
      bottomTable: {
        fontSize: 10,
      },
    },
  };
}

async function testeasdf() {
  if (typeof window === 'undefined') return null;

  const pdfMakeModule = await import('pdfmake/build/pdfmake');
  const pdfFontsModule = await import('pdfmake/build/vfs_fonts');

  const pdfMake: any = pdfMakeModule && (pdfMakeModule as any).default ? (pdfMakeModule as any).default : pdfMakeModule;
  const pdfFonts: any = pdfFontsModule && (pdfFontsModule as any).default ? (pdfFontsModule as any).default : pdfFontsModule;

  pdfMake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfFonts.vfs;

  pdfMake.fonts = {
    Roboto: {
      normal: 'Roboto-Regular.ttf',
      bold: 'Roboto-Medium.ttf',
      italics: 'Roboto-Italic.ttf',
      bolditalics: 'Roboto-MediumItalic.ttf'
    }
  };

  return pdfMake;
}

const pdfMake = await testeasdf();