import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name:'',
    email: '',
    photo: ''
}


const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserLogin:(state, action)=>{
            state.name = action.payload.name
            state.mail = action.payload.email
            state.photo = action.payload.photo
        },
        setSignOut:(state)=>{
            state.name = null
            state.photo = null
            state.email = null
        }
    }
})

export const { setUserLogin, setSignOut} = userSlice.actions;

export const selectUserName = (state)=> state.user.name;
export const selectUserPhoto = (state)=> state.user.photo;
export const selectUserEmail = (state)=> state.user.email;

export default userSlice.reducer;