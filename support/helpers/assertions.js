class APIAssertions {
  static validateResponseStructure(response, expectedFields) {
    expect(response.data).toBeDefined()
    
    expectedFields.forEach(field => {
      expect(response.data).toHaveProperty(field)
    })
  }

  static validateStatusCode(response, expectedStatus) {
    expect(response.status).toBe(expectedStatus)
  }

  static validateErrorMessage(response, expectedMessage = null) {
    expect(response.data).toHaveProperty('message')
    if (expectedMessage) {
      expect(response.data.message).toBe(expectedMessage)
    }
  }

  static validateSuccessMessage(response, expectedMessage) {
    expect(response.data).toHaveProperty('message')
    expect(response.data.message).toBe(expectedMessage)
  }

  static validateArrayResponse(response, arrayKey, minLength = 0) {
    expect(response.data).toBeDefined()
    expect(response.data).toHaveProperty(arrayKey)
    expect(Array.isArray(response.data[arrayKey])).toBe(true)
    expect(response.data[arrayKey].length).toBeGreaterThanOrEqual(minLength)
  }

  static validateJWTToken(token) {
    expect(token).toBeDefined()
    expect(typeof token).toBe('string')
    expect(token.length).toBeGreaterThan(0)
    
    // JWT format validation: header.payload.signature
    const tokenParts = token.split('.')
    expect(tokenParts).toHaveLength(3)
    
    tokenParts.forEach(part => {
      expect(part.length).toBeGreaterThan(0)
    })
  }

  static validateUserObject(user) {
    const requiredFields = ['_id', 'nome', 'email', 'administrador']
    requiredFields.forEach(field => {
      expect(user).toHaveProperty(field)
    })
    
    // Validate data types
    expect(typeof user._id).toBe('string')
    expect(typeof user.nome).toBe('string')
    expect(typeof user.email).toBe('string')
    expect(typeof user.administrador).toBe('string')
  }

  static validateProductObject(product) {
    const requiredFields = ['_id', 'nome', 'preco', 'descricao', 'quantidade']
    requiredFields.forEach(field => {
      expect(product).toHaveProperty(field)
    })
    
    // Validate data types
    expect(typeof product._id).toBe('string')
    expect(typeof product.nome).toBe('string')
    expect(typeof product.preco).toBe('number')
    expect(typeof product.descricao).toBe('string')
    expect(typeof product.quantidade).toBe('number')
  }

  static validateCartObject(cart) {
    const requiredFields = ['_id', 'produtos', 'precoTotal', 'quantidadeTotal', 'idUsuario']
    requiredFields.forEach(field => {
      expect(cart).toHaveProperty(field)
    })
    
    expect(Array.isArray(cart.produtos)).toBe(true)
    expect(typeof cart.precoTotal).toBe('number')
    expect(typeof cart.quantidadeTotal).toBe('number')
  }

  static validateResponseTime(startTime, maxTime = 5000) {
    const responseTime = Date.now() - startTime
    expect(responseTime).toBeLessThanOrEqual(maxTime)
    console.log(`⏱️ Response time: ${responseTime}ms`)
  }
}

module.exports = APIAssertions