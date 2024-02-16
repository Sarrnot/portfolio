import { useDispatch, useSelector, useStore } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { ArcadeRootState, ArcadeDispatch, ArcadeStore } from "./store";

export const useArcadeDispatch: () => ArcadeDispatch = useDispatch;
export const useArcadeSelector: TypedUseSelectorHook<ArcadeRootState> =
    useSelector;
export const useArcadeStore: () => ArcadeStore = useStore;
