import { useDispatch } from 'react-redux';
import { User } from '../../../domain/enity/User';
import { createSlice, createAsyncThunk, createAction, unwrapResult, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    loadingUser: boolean;
    dataUsers: User | undefined,
    setLoggedIn: boolean,
}
export const dataUser: User = {} as User;

export interface DataGetUser {
    _id: string,
    img: string,
    phone: string,
    password: string
}

export const initialState: UserState = {
    loadingUser: false,
    dataUsers: {} as User,
    setLoggedIn: false,
};

export const getUser = createAsyncThunk<User | undefined, DataGetUser>(
    'user/getUser',
    async (dataGetUser: DataGetUser) => {
        try {
            const response = await fetch('https://stayapi-production.up.railway.app/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const res = await response.json();
                return res.account;
            } else {
                return undefined;
            }
        } catch (error) {
            console.log('Error fetching user:', error);
            return undefined;
        }
    }
);

export const login = createAsyncThunk<User | undefined, { phone: string, password: string }>(
    'user/login',
    async ({ phone, password }) => {
        try {
            const response = await fetch('https://stayapi-production.up.railway.app/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phone, password }),
            });

            if (response.ok) {
                const res = await response.json();
                return res.account;
            } else {
                return null;
            }
        } catch (error) {
            console.log('Error logging in:', error);
            return null;
        }
    }

);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser: state => {
            // Reset state to the initial state
            return initialState
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getUser.pending, state => {
                state.loadingUser = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loadingUser = false;
                if (action.payload) {
                    state.dataUsers = action.payload;
                }
            })
            .addCase(login.pending, state => {
                state.loadingUser = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loadingUser = false;
                try {
                    if (action.payload) {
                        state.dataUsers = action.payload;
                        // Dispatch the updateUserInContext action to update the user data in the Redux store
                        const dispatch = useDispatch();
                        dispatch(updateUserInContext(action.payload));
                        // Dispatch the setNotification action to display a success message
                        console.log('Login success redux', dataUser);
                    } else {
                        console.log('Login failed:', 'Invalid user data');
                    }
                } catch (error) {
                    console.error('Error in login.fulfilled case:', error);
                }
            });
    },
})

export const userReducer = userSlice.reducer;
export const updateUserInContext = createAction<User | undefined>('user/updateUserInContext')
export const { logoutUser } = userSlice.actions;