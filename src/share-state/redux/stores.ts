import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { userReducer } from './reducers/userReducer';

export const store = configureStore({
    reducer: {
        user: userReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;