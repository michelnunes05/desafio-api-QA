const axios = require('axios');

const API_BASE_URL = 'https://serverest.dev';

describe('Login - Testes Críticos', () => {
  
  describe('Login com sucesso', () => {
    test('Deve realizar login com credenciais válidas', async () => {
      // Primeiro, criar um usuário para fazer login
      const userData = {
        nome: 'Teste Usuario',
        email: `teste${Date.now()}@example.com`,
        password: '123456',
        administrador: 'true'
      };

      // Criar usuário
      await axios.post(`${API_BASE_URL}/usuarios`, userData);

      // Realizar login
      const loginData = {
        email: userData.email,
        password: userData.password
      };

      const response = await axios.post(`${API_BASE_URL}/login`, loginData);

      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('authorization');
      expect(response.data.message).toBe('Login realizado com sucesso');
    });
  });

  describe('Login com falha', () => {
    test('Deve falhar ao tentar login com credenciais inválidas', async () => {
      const loginData = {
        email: 'usuario@inexistente.com',
        password: 'senhaerrada'
      };

      try {
        await axios.post(`${API_BASE_URL}/login`, loginData);
      } catch (error) {
        expect(error.response.status).toBe(401);
        expect(error.response.data.message).toBe('Email e/ou senha inválidos');
      }
    });
  });

});