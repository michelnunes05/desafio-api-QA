const axios = require('axios')
require('dotenv').config()

class BaseAPI {
  constructor() {
    this.baseURL = process.env.BASE_URL || 'https://serverest.dev'
    this.timeout = parseInt(process.env.TIMEOUT) || 10000
    
    this.client = axios.create({
      baseURL: this.baseURL,
      timeout: this.timeout,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // Interceptor para logs (opcional)
    this.client.interceptors.request.use(
      (config) => {
        console.log(`🚀 ${config.method?.toUpperCase()} ${config.url}`)
        return config
      },
      (error) => Promise.reject(error)
    )

    this.client.interceptors.response.use(
      (response) => {
        console.log(`✅ ${response.status} ${response.config.method?.toUpperCase()} ${response.config.url}`)
        return response
      },
      (error) => {
        console.log(`❌ ${error.response?.status} ${error.config?.method?.toUpperCase()} ${error.config?.url}`)
        return Promise.reject(error)
      }
    )
  }

  async get(endpoint, config = {}) {
    try {
      return await this.client.get(endpoint, config)
    } catch (error) {
      return error.response || error
    }
  }

  async post(endpoint, data = {}, config = {}) {
    try {
      return await this.client.post(endpoint, data, config)
    } catch (error) {
      return error.response || error
    }
  }

  async put(endpoint, data = {}, config = {}) {
    try {
      return await this.client.put(endpoint, data, config)
    } catch (error) {
      return error.response || error
    }
  }

  async delete(endpoint, config = {}) {
    try {
      return await this.client.delete(endpoint, config)
    } catch (error) {
      return error.response || error
    }
  }

  setAuthToken(token) {
    this.client.defaults.headers.common['Authorization'] = token
  }

  removeAuthToken() {
    delete this.client.defaults.headers.common['Authorization']
  }

  getBaseURL() {
    return this.baseURL
  }
}

module.exports = BaseAPI