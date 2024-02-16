import AbstractGameObject from "../Entity/AbstractGameObject";
import Obstacle from "../Entity/Obstacle";
import Player from "../Entity/Player";

class GameObjectRepository {
    private player?: Player;
    private obstacles: Obstacle[] = [];

    getAll(): AbstractGameObject[] {
        const objects = [...this.obstacles];
        this.player && objects.push(this.player);
        return objects;
    }
}

export default GameObjectRepository;
