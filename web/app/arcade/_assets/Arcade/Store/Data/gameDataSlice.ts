import { createSlice } from "@reduxjs/toolkit";

type State = {
    score: number;
};

const initialState: State = {
    score: 0,
};

const gameDataSlice = createSlice({
    name: "gameData",
    initialState,
    reducers: {
        incrementScore: (state) => {
            state.score += 1;
        },
        resetGameData: () => ({ ...initialState }),
    },
});

export const { incrementScore, resetGameData } = gameDataSlice.actions;

export default gameDataSlice;
