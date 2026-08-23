import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ThemeReducer } from "./ThemeSlice";
import { APIData } from "./APIData";

export const RED = configureStore({
    reducer: {
        theme: ThemeReducer,
        [APIData.reducerPath]: APIData.reducer,
    },  //  gDM = getDefaultMiddleware.
    middleware: (gDM) => gDM().concat(APIData.middleware),
});

setupListeners(RED.dispatch);
export type RootState = ReturnType <typeof RED.getState>;
export type AppDispatch = typeof RED.dispatch;



