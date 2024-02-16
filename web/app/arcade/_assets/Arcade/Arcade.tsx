"use client";

import stageDictionary from "./Stage/stageDictionary";
import StoreProvider from "./Store/StoreProvider";
import { useArcadeSelector } from "./Store/hooks";

const ArcadeContent = () => {
    const GameStage = useArcadeSelector(
        (state) => stageDictionary[state.stage.value]
    );

    return (
        <div className="bg-primaryLight absolute top-0 right-0 bottom-0 left-0 m-auto max-h-full aspect-[3/2]">
            <GameStage />
        </div>
    );
};

const Arcade = () => {
    return (
        <StoreProvider>
            <ArcadeContent />
        </StoreProvider>
    );
};

export default Arcade;
