import reduxGenerator from 'magic-redux-generator'

let userReducer = reduxGenerator.createReducer('users')
export default userReducer.reducer
