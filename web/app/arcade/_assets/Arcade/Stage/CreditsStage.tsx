import { setStage } from "../Store/Data/stageSlice";
import { useArcadeDispatch } from "../Store/hooks";

const CreditsStage = () => {
    const dispatch = useArcadeDispatch();

    return (
        <div className="flex flex-col justify-center items-center gap-6 relative w-full h-full">
            <button
                className="absolute top-4 right-6"
                onClick={() => dispatch(setStage("newGame"))}
            >
                Back
            </button>
            <div className="text-xl">
                Animal icons:{" "}
                <a
                    href="https://www.svgrepo.com/"
                    target="_blank"
                    rel="noopener"
                    className="underline"
                >
                    https://www.svgrepo.com/
                </a>{" "}
                (CC Attribution License)
            </div>
        </div>
    );
};

export default CreditsStage;
