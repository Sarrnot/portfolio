import AbstractGameObject from "../Entity/AbstractGameObject";
import Landscape from "../Entity/Landscape";
import Obstacle from "../Entity/Obstacle";
import Player from "../Entity/Player";
import Text from "../Entity/Text";

class GameObjectRepository {
    public players: Player[] = [];
    public obstacles: Obstacle[] = [];
    public landscapes: Landscape[] = [];
    public texts: Text[] = [];
    private dictionary = {
        [Player.name]: this.players,
        [Obstacle.name]: this.obstacles,
        [Landscape.name]: this.landscapes,
        [Text.name]: this.texts,
    };

    getAll(): AbstractGameObject[] {
        return [
            ...this.players,
            ...this.obstacles,
            ...this.landscapes,
            ...this.texts,
        ];
    }

    destroy(object: AbstractGameObject) {
        const repository = this.dictionary[object.constructor.name];

        repository.splice(repository.indexOf(object), 1);
    }
}

export default GameObjectRepository;
