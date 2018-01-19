import {SET_USER} from '../types'
import axios from 'axios'
export const setLogin = (user) => {
    return {
        type: SET_USER,
        user
    }
}

export const login = (credentials) => (
    (dispatch) => axios.post('/api/v1/users/login',{credentials} )
    .then(res => dispatch(setLogin(res.data.user)))
)

export const signup = (data) => (
    (dispatch) => axios.post('/api/v1/users/signup', {data})
    .then(res => dispatch(setLogin(res.data.user)))
)
