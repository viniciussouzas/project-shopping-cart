const LIST_API_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=';

const ID_API_URL = 'https://api.mercadolibre.com/items/';

export const fetchProduct = async ($ProductID) => {
  if (!$ProductID) {
    throw new Error('ID não informado');
  }
  const response = await fetch(`${ID_API_URL}${$ProductID}`);
  const data = await response.json();

  return data;
};

export const fetchProductsList = async ($QUERY) => {
  if (!$QUERY) {
    throw new Error('Termo de busca não informado');
  }

  const response = await fetch(`${LIST_API_URL}${$QUERY}`);

  const data = await response.json();

  return data.results;
};
