import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userRegister';
const store = configureStore({
    reducer:{
        userState:userReducer
    }

})

export default store;