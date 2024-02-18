import AbstractGameObject from "../Entity/AbstractGameObject";
import Landscape from "../Entity/Landscape";
import Obstacle from "../Entity/Obstacle";
import Player from "../Entity/Player";

class GameObjectRepository {
    public players: Player[] = [];
    public obstacles: Obstacle[] = [];
    public landscapes: Landscape[] = [];
    public other: AbstractGameObject[] = [];
    private dictionary = {
        [Player.name]: this.players,
        [Obstacle.name]: this.obstacles,
        [Landscape.name]: this.landscapes,
    };

    getAll(): AbstractGameObject[] {
        return [
            ...this.players,
            ...this.obstacles,
            ...this.landscapes,
            ...this.other,
        ];
    }

    destroy(object: AbstractGameObject) {
        const repository =
            this.dictionary[object.constructor.name] || this.other;

        const index = repository.findIndex(
            (repositoryObject) => object === repositoryObject
        );

        if (index === -1) return;

        repository.splice(index, 1);
    }
}

export default GameObjectRepository;
