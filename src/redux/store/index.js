import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '../reducers'

const middlewares = [
    thunkMiddleware
]

// if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
//     middlewares.push(require('redux-logger').createLogger())
// }

// const enhancer = composeEnhancers(
//   applyMiddleware(...middlewares),
//   // other store enhancers if any
// )

export default createStore(
    rootReducer,
    // applyMiddleware(thunkMiddleware)
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
