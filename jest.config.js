module.exports = {
  // Ambiente de teste
  testEnvironment: 'node',
  
  // Padrão de arquivos de teste
  testMatch: [
    '**/tests/**/*.test.js',
    '**/tests/**/*.spec.js'
  ],
  
  // Timeout para testes (importante para testes de API)
  testTimeout: 10000,
  
  // Configuração de cobertura
  collectCoverageFrom: [
    'tests/**/*.js',
    '!tests/**/*.config.js'
  ],
  
  // Diretório de saída da cobertura
  coverageDirectory: 'coverage',
  
  // Relatórios de cobertura
  coverageReporters: ['text', 'lcov', 'html'],
  
  // Configuração para jest-html-reporters
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './reports',
        filename: 'jest-report.html',
        expand: true
      }
    ]
  ],
  
  // Setup files (se necessário)
  setupFilesAfterEnv: [],
  
  // Configurações adicionais
  verbose: true,
  clearMocks: true
};