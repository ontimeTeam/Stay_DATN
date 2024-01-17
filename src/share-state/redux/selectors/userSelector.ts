import { createSelector } from '@reduxjs/toolkit'
import { UserState } from '../reducers/userReducer'

const selectUser = (state: { user: UserState }) => state.user.dataUser

export const selectUserData = createSelector(
    [selectUser],
    (user) => {
        if (!user) return undefined
        return {
            id: user._id,
            img: user.img,
            phone: user.phone,
            password: user.password,
        }
    }
);
