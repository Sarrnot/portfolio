import { setStage } from "../Store/Data/stageSlice";
import { useArcadeDispatch } from "../Store/hooks";

const ControlsStage = () => {
    const dispatch = useArcadeDispatch();

    return (
        <div className="flex flex-col justify-center items-center gap-6 relative w-full h-full">
            <button
                className="absolute top-4 left-6"
                onClick={() => dispatch(setStage("newGame"))}
            >
                Back
            </button>
            <div className="text-xl font-bold">Desktop</div>
            <div className="text-lg">Jump - Spacebar</div>
            <div className="text-xl font-bold">Mobile</div>
            <div className="text-lg">Jump - Tap</div>
        </div>
    );
};

export default ControlsStage;
