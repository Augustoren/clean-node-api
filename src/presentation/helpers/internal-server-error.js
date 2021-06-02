module.exports = class InternalServerError extends Error {
  constructor () {
    super('Internal error')
    this.name = 'InternalServerError'
  }
}
