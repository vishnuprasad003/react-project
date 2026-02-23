import {createSlice} from '@reduxjs/toolkit'
const userSlice = createSlice({
    name:"userSlice",
    initialState:{
        users:JSON.parse(localStorage.getItem('users')) || [],
        loading:false,
        user:JSON.parse(localStorage.getItem('user')) || null,
        isAuthentication:JSON.parse(localStorage.getItem('isAuthentication')) || false
    },
    reducers:{
        userRegister:(state,action)=>{
                state.users.push(action.payload)
                localStorage.setItem('users',JSON.stringify(state.users));
        },
        userLogin:(state,action) => {
            state.user = action.payload
            state.isAuthentication =  true

            localStorage.setItem('user',JSON.stringify(state.user));
            localStorage.setItem('isAuthentication',JSON.stringify(state.isAuthentication));
        }
    }
})
export const {userRegister,userLogin} = userSlice.actions
export default userSlice.reducer;


