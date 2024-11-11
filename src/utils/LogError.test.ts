import { logError } from './logError'

describe('logError Utility', () => {
  const originalConsoleError = console.error

  beforeAll(() => {
    console.error = jest.fn()
  })

  afterAll(() => {
    console.error = originalConsoleError
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should not log to console.error when isLoggingEnabled is false', () => {
    const message = 'Test error message'
    const error = new Error('Test error')

    logError(message, error)
    expect(console.error).not.toHaveBeenCalled()
  })
})
