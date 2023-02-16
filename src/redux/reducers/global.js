/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import produce, { current } from 'immer'
import {
    UPDATE_LOGIN_STATUS
} from '../constants/global'

const INITIAL_STATE = {
    loginUser: null
}

const globalReducer = produce((draft = INITIAL_STATE, action) => {
    switch (action.type) {
    case UPDATE_LOGIN_STATUS:
        draft.loginUser = action.param
        break
    default:
        return draft
    }
})

export default globalReducer
