import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('Testa se fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('Testa se fetch é chamado ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });

  it('Testa se fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });

  it('Testa se ao chamar fetchProduct com argumento "MLB1405519561", retorna o valor esperado', async () => {
    const response = await fetchProduct('MLB1405519561');
     expect(response).toEqual(product);
  });

  it('Testa se ao chamar fetchProduct sem argumento, retorna erro "ID não informado" ', async () => {
    await expect(fetchProduct()).rejects.toThrow(new Error('ID não informado'));
  });
});
