import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const productsList = document.querySelector('.products');

document.querySelector('.cep-button').addEventListener('click', searchCep);

const listProducts = async ($QUERY) => {
  const result = await fetchProductsList($QUERY);

  result.forEach((product) => productsList.appendChild(createProductElement(product)));
};

listProducts('computador');
