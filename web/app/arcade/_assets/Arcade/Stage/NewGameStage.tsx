import { setStage } from "../Store/Data/stageSlice";
import { useArcadeDispatch, useArcadeSelector } from "../Store/hooks";

import avatars from "../Avatar/avatars";
import Image from "next/image";
import { setAvatar } from "../Store/Data/settingsSlice";

const NewGameStage = () => {
    const dispatch = useArcadeDispatch();
    const selectedAvatar = useArcadeSelector((state) => state.settings.avatar);

    return (
        <div className="flex flex-col relative h-full text-center p-4 gap-6 sm:gap-10 justify-center items-center">
            <div>Choose your avatar</div>
            <div className="flex justify-center items-end sm:flex-wrap gap-6">
                {avatars.map((avatar, i) => (
                    <div
                        className={`flex flex-col items-center cursor-pointer p-1 border-4 ${
                            avatar === selectedAvatar
                                ? "border-primary"
                                : "border-transparent"
                        }`}
                        onClick={() => dispatch(setAvatar(avatar))}
                        key={i}
                    >
                        <Image
                            src={avatar.imageSrc}
                            alt="Avatar"
                            width="48"
                            height="48"
                            className="w-8 h-8 sm:w-12 sm:h-12"
                        />
                        {avatar.name}
                    </div>
                ))}
            </div>
            <button
                className="text-xl sm:text-2xl border-2 w-fit px-5 py-2 border-primaryDark hover:border-primary hover:text-primary"
                onClick={() => dispatch(setStage("game"))}
            >
                New game
            </button>
            <button
                className="absolute top-4 left-6"
                onClick={() => dispatch(setStage("controls"))}
            >
                Controls
            </button>
            <button
                className="absolute top-4 right-6"
                onClick={() => dispatch(setStage("credits"))}
            >
                Credits
            </button>
        </div>
    );
};

export default NewGameStage;
