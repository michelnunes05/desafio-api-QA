class DataGenerator {
  static generateRandomEmail() {
    const timestamp = Date.now()
    const random = Math.floor(Math.random() * 1000)
    return `user${timestamp}${random}@test.com`
  }

  static generateRandomString(length = 10) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

  static generateRandomNumber(min = 1, max = 1000) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  static generateUser(overrides = {}) {
    return {
      nome: `User ${this.generateRandomString(8)}`,
      email: this.generateRandomEmail(),
      password: '123456',
      administrador: 'false',
      ...overrides
    }
  }

  static generateProduct(overrides = {}) {
    return {
      nome: `Produto ${this.generateRandomString(5)}`,
      preco: this.generateRandomNumber(10, 1000),
      descricao: `Descrição do produto ${this.generateRandomString(10)}`,
      quantidade: this.generateRandomNumber(1, 100),
      ...overrides
    }
  }

  static generateCart(produtos, overrides = {}) {
    return {
      produtos: produtos || [
        {
          idProduto: '123',
          quantidade: 1
        }
      ],
      ...overrides
    }
  }
}

module.exports = DataGenerator