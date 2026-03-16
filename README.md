# 📊 Label Generator

**Label Generator** é um projeto exemplo de uma aplicação web desenvolvida com HTML, CSS, Vue e pdfmake.
O objetivo é demonstrar boas práticas na criação de interfaces modernas e reativas para impressão de etiquetas no formato 100mm x 500mm, as imprimindo no formato PDF.

---

## 📸 Preview

![Imagem da tela principal](https://github.com/alexsandro49/label_generator/blob/main/src/assets/screenshot.png)
![Rascunho](https://github.com/alexsandro49/label_generator/blob/main/src/racunho-etiqueta.png)

---

## 🚀 Tecnologias utilizadas
### Front-end:
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [TypeScript](https://www.typescriptlang.org/)
- [Vue.js](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [pdfmake](http://pdfmake.org/)

### Back-end:
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [TypeScript](https://www.typescriptlang.org/)
- [Express.js](https://expressjs.com/)

---

## 🧱 Funcionalidades

- Listagem de etiquetas
- Edição dos dados
- Adição de etiquetas
- Remoção d etiquetas

---

## 📁 Estrutura de Pastas
```
src/
├── assets/         # Imagens e ícones
├── components/     # Componentes reutilizáveis
├── routes/         # Configuração das rotas (Vue Router)
├── stores/         # Pinia stores
├── utils/          # Funções utilitárias
├── App.vue         # Componente raiz
├── main.ts         # Inicialização do app

```

## Como executar o projeto:
### Preparando a API:
1. Clone o repositório da API na sua máquina:
   ```
   git clone https://github.com/alexsandro49/label_generator_api.git
   ```
2. Entre na pasta do repositório:
   ```
   cd label_generator_api/
   ```
3. Instale as dependências:
   ```
   npm install
   ```
4. Execute a API:
   ```
   npm run dev
   ```

#### A API é necessária para o acesso aos dados das etiquetas.

### Preparando o front-end:
1. Clone o repositório do front-end na sua máquina:
   ```
   git clone https://github.com/alexsandro49/label_generator.git
   ```
2. Entre na pasta do repositório:
   ```
   cd label_generator/
   ```
3. instale as dependências:
   ```
   npm install ---legacy-peer-deps
   ```
4. Execute o front-end:
   ```
   npm run dev
   ```

#### O projeto estará disponível em http://localhost:5173/

## License
- [MIT](https://github.com/alexsandro49/label-generator/blob/main/LICENSE)