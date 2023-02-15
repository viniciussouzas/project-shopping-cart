const API_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=';

export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async ($QUERY) => {
  if (!$QUERY) {
    throw new Error('Termo de busca não informado');
  }

  const joinURL = `${API_URL}${$QUERY}`;

  const response = await fetch(joinURL);

  const data = await response.json();

  if (data.error) {
    throw new Error('Algum erro ocorreu, recarregue a página e tente novamente');
  }

  return data.results;
};
