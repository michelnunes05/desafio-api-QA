const BaseAPI = require('./BaseAPI')

class AuthAPI extends BaseAPI {
  constructor() {
    super()
    this.endpoint = '/login'
  }

  async login(credentials) {
    return await this.post(this.endpoint, credentials)
  }

  async getTokenForAdmin() {
    const credentials = {
      email: process.env.ADMIN_EMAIL || 'admin@serverest.dev',
      password: process.env.ADMIN_PASSWORD || '123456'
    }
    
    const response = await this.login(credentials)
    
    if (response.status === 200) {
      this.setAuthToken(response.data.authorization)
      return response.data.authorization
    }
    
    throw new Error(`Failed to get admin token: ${response.data?.message || 'Unknown error'}`)
  }

  async getTokenForUser() {
    const credentials = {
      email: process.env.USER_EMAIL || 'user@serverest.dev',
      password: process.env.USER_PASSWORD || '123456'
    }
    
    const response = await this.login(credentials)
    
    if (response.status === 200) {
      this.setAuthToken(response.data.authorization)
      return response.data.authorization
    }
    
    throw new Error(`Failed to get user token: ${response.data?.message || 'Unknown error'}`)
  }
}

module.exports = AuthAPI