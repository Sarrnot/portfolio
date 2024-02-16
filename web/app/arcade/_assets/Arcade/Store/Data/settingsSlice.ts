import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Avatar from "../../Avatar/Avatar";
import avatars from "../../Avatar/avatars";

const initialState: { avatar: Avatar } = {
    avatar: avatars[0],
};

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setAvatar: (state, action: PayloadAction<Avatar>) => {
            state.avatar = action.payload;
        },
    },
});

export const { setAvatar } = settingsSlice.actions;

export default settingsSlice;
