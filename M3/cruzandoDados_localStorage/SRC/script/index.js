import { data } from "./data.js";

const root = document.querySelector('.root');
root.classList.add('container');
root.classList.add('main');

// Função para renderizar todos os produtos
const renderAllProducts = (products) => {
  root.innerHTML = ''; // Limpa os produtos existentes antes de renderizar todos novamente
  products.forEach((elem) => {
    root.insertAdjacentHTML(
      `beforeend`,
      `
        <div data-product="${elem.id}" class="product">
          <img src=${elem.image} alt="${elem.name}">
          <h2>${elem.name}</h2>
          <p>R$ ${elem.price}</p>
        </div>
      `,
    );
  });
};

// Função para adicionar listener aos produtos para detalhamento
const addDetailListenersToProducts = () => {
  const products = document.querySelectorAll('.product');
  products.forEach((product) => product.addEventListener('click', () => {
    const id = +product.getAttribute('data-product');
    findProduct(id);
  }));
};

// Função que busca e renderiza um produto específico
const findProduct = (id) => {
  const currentProduct = data.find((elem) => elem.id === id);
  renderProduct(currentProduct); // Atualizado para passar o produto diretamente
};

// Função para renderizar um produto específico
const renderProduct = (product) => {
  root.innerHTML = ''; // Limpa o conteúdo atual
  root.insertAdjacentHTML(
    'beforeend',
    `
    <div class="currentProduct">
      <div>
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="currentProduct__info">
        <h2>${product.name}</h2>
        <p>R$ ${product.price}</p>
        <p>${product.description}</p>
        <button class="btn" type="button">Comprar</button>
      </div>
    </div>
    `,
  );
};

// Função para adicionar listeners aos itens do menu
const addMenuListeners = () => {
  document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('click', () => {
      const id = +item.getAttribute('data-id');
      findProduct(id);
    });
  });
};

// Função inicial que renderiza todos os produtos e adiciona os listeners necessários
const init = () => {
  renderAllProducts(data);
  addDetailListenersToProducts();
  addMenuListeners();
  goToHomePage();
};

// Função para retornar à página inicial quando clicar no logo
const goToHomePage = () => {
  const logo = document.querySelector('.logo');
  logo.addEventListener('click', init);
};

init(); // Chama a função inicial

  