import {
    configureStore,
    combineReducers,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
import loginReducer from "./Slice/loginSlice";
import homeReducer from "./Slice/homeSlice";

const rootReducer = combineReducers({
    login: loginReducer,
    home: homeReducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [],
        },
    }),
});

export default store;
