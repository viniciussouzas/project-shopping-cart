import { getSavedCartIDs } from './helpers/cartFunctions';
import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createCartProductElement,
  createCustomElement, createProductElement } from './helpers/shopFunctions';
import './style.css';

const productsList = document.querySelector('.products');
const cartProducts = document.querySelector('.cart__products');

document.querySelector('.cep-button').addEventListener('click', searchCep);

const listProducts = async ($QUERY) => {
  const runsLoading = createCustomElement('p', 'loading', 'carregando...');
  productsList.appendChild(runsLoading);

  const result = await fetchProductsList($QUERY).catch(() => {
    runsLoading.remove();

    const errorMessage = 'Algum erro ocorreu, recarregue a página e tente novamente';

    const runsError = createCustomElement('p', 'error', errorMessage);

    productsList.appendChild(runsError);
  });

  if (result) {
    runsLoading.remove();

    result.forEach((product) => {
      const productElement = createProductElement(product);

      productsList.appendChild(productElement);
    });
  }
};

const recoverSaved = async () => {
  const cartIds = getSavedCartIDs();

  const solvePromises = await Promise.all(cartIds.map((id) => fetchProduct(id)));

  solvePromises.forEach((promise) => {
    const create = createCartProductElement(promise);

    cartProducts.appendChild(create);
  });
};

listProducts('computador');

recoverSaved();
