import ControlsStage from "./ControlsStage";
import CreditsStage from "./CreditsStage";
import GameOverStage from "./GameOverStage";
import GameStage from "./GameStage";
import NewGameStage from "./NewGameStage";
import WelcomeStage from "./WelcomeStage";

const stageDictionary = {
    welcome: WelcomeStage,
    newGame: NewGameStage,
    game: GameStage,
    credits: CreditsStage,
    gameOver: GameOverStage,
    controls: ControlsStage,
};

export default stageDictionary;
