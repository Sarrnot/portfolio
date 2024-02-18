import Player from "../Entity/Player";
import GameObjectRepository from "./GameObjectRepository";
import { ArcadeStore } from "../Store/store";
import BASELINE_Y from "../constants/BASELINE_Y";
import TICKS_FREQUENCY from "../constants/TICKS_FREQUENCY";

export const JUMP_VELOCITY = TICKS_FREQUENCY / 5;
const SIZE = 80;
const LEFT_MARGIN = 100;

class PlayerController {
    private player: Player;
    public enabled = true;

    constructor(store: ArcadeStore, objectRepository: GameObjectRepository) {
        const avatar = store.getState().settings.avatar;

        this.player = new Player(
            { x: LEFT_MARGIN, y: BASELINE_Y },
            { x: SIZE, y: SIZE },
            { x: 0, y: 0 },
            avatar
        );

        objectRepository.players.push(this.player);

        window.addEventListener("keydown", this.jumpListener);
        window.addEventListener("touchstart", this.jumpListener);
    }

    private jumpListener = (e: KeyboardEvent | TouchEvent) => {
        if (e instanceof KeyboardEvent && e.code !== "Space") return;
        if (!this.enabled) return;

        const isAirborne = this.player.position.y > BASELINE_Y;
        if (isAirborne) return;

        this.player.velocity.y = JUMP_VELOCITY;
    };
}

export default PlayerController;
