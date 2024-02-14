import { configureStore, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const ifAuth = Cookies.get('Auth')? true : false;

const initialState = { isAuth: ifAuth }

const isAuth = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        login(state) {
            state.isAuth = true;
        },
        logout(state) {
            state.isAuth = false;
        }
    }
}); 

const store = configureStore({ reducer: isAuth.reducer }); 

export const setCookies = (token) =>{ 
    return (dispatch) => {
    Cookies.set('Auth', token);
    dispatch(isAuthactions.login())
}}

export const removeCookies = () =>{ 
    return (dispatch) => {
    Cookies.remove('Auth');
    dispatch(isAuthactions.logout())
}}





export const isAuthactions = isAuth.actions;
export default store;