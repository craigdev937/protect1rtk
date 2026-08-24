import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IAuthState, IAuth } from "../models/Interfaces";

const LoadAuthUser = (): IAuth | null => {
    try {
        const stored = localStorage.getItem("auth_user");
        return stored ? JSON.parse(stored) as IAuth : null;
    } catch (error) {
        return null;
    }
};

const storedUser = LoadAuthUser();

const initialState: IAuthState = {
    isAuth: storedUser !== null,
    user: storedUser
};

const AuthSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IAuth>) => {
            state.isAuth = true;
            state.user = action.payload;
            localStorage.setItem("auth_user", JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.isAuth = false;
            state.user = null;
            localStorage.removeItem("auth_user");
        },
    }
});

export const { setUser, logout } = AuthSlice.actions;
export const AuthReducer = AuthSlice.reducer;


