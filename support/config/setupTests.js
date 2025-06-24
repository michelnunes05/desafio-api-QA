// Global test configuration
require('dotenv').config()

// Global variables
global.API_BASE_URL = process.env.BASE_URL || 'https://serverest.dev'

// Jest configuration
jest.setTimeout(30000)

// Global beforeAll
beforeAll(async () => {
  console.log('🚀 Starting API Test Suite')
  console.log(`📍 Base URL: ${global.API_BASE_URL}`)
})

// Global afterAll
afterAll(async () => {
  console.log('✅ API Test Suite Completed')
})

// Error handling
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason)
})