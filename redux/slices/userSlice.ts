import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types";
import { RootState } from "../store";

const initialState={
   user:{
    username:"",
    firstName:'',
    lastName:"",
    email:"",
    password:"",
    phone:"",
    address:""
    } satisfies IUser,
    theme:""
}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action:PayloadAction<IUser>)=>{
            state.user=action.payload
        },
        setTheme:(state,action:PayloadAction<string>)=>{
            state.theme=action.payload
        }
    }
})

export const {setUser,setTheme}=userSlice.actions
export const selectTheme=(state:RootState)=>state.theme
export const selectUser=(state:RootState)=>state.user
export default userSlice.reducer