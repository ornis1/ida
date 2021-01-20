export default class NetworkError extends Error {
  constructor(message = 'Ошибка сети') {
    super()
    this.message = message
  }
}
