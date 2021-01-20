export default class ApiError extends Error {
  constructor(message = 'ApiError') {
    super()
    this.message = message
  }
}
