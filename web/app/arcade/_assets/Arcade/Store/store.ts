import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "./Data/settingsSlice";
import stageSlice from "./Data/stageSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            settings: settingsSlice.reducer,
            stage: stageSlice.reducer,
        },
    });
};

export type ArcadeStore = ReturnType<typeof makeStore>;
export type ArcadeRootState = ReturnType<ArcadeStore["getState"]>;
export type ArcadeDispatch = ArcadeStore["dispatch"];
