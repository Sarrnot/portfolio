import CreditsStage from "./CreditsStage";
import GameStage from "./GameStage";
import NewGameStage from "./NewGameStage";
import WelcomeStage from "./WelcomeStage";

const stageDictionary = {
    welcome: WelcomeStage,
    newGame: NewGameStage,
    game: GameStage,
    credits: CreditsStage,
};

export default stageDictionary;
