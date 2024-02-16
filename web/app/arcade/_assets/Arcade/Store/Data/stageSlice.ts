import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import stageDictionary from "../../Stage/stageDictionary";

const initialState: { value: keyof typeof stageDictionary } = {
    value: "welcome",
};

const stageSlice = createSlice({
    name: "stage",
    initialState,
    reducers: {
        setStage: (
            state,
            action: PayloadAction<keyof typeof stageDictionary>
        ) => {
            state.value = action.payload;
        },
    },
});

export const { setStage } = stageSlice.actions;

export default stageSlice;
