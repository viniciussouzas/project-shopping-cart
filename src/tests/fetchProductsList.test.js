import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  }); 

  it('Testa se ao chamar fetchProductsList com argumento "computador", retorna o valor esperado', async () => {
    const response = await fetchProductsList('computador');
    expect(response).toEqual(computadorSearch);
  });

  it('Testa se ao chamar fetchProductList sem argumento, retorna erro "Termo de busca não informado" ', async () => {
    await expect(fetchProductsList()).rejects.toThrow(new Error('Termo de busca não informado'));
  });
});
