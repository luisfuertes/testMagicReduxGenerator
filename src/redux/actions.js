import reduxGenerator from 'magic-redux-generator'

let baseUri = 'http://demo5602304.mockable.io' + '/users'
let actions = reduxGenerator.createActions(baseUri, 'users')
let types = reduxGenerator.createTypes('users')

export default {
  ...actions,

  types,
}
