import AbstractGameObject from "../Entity/AbstractGameObject";
import Obstacle from "../Entity/Obstacle";
import GameObjectRepository from "./GameObjectRepository";
import BASELINE_Y from "../constants/BASELINE_Y";
import TICKS_FREQUENCY from "../constants/TICKS_FREQUENCY";
import EventDispatcher from "./EventDispatcher";
import CollisionEvent from "../Event/CollisionEvent";
import ObjectDestroyedEvent from "../Event/ObjectDestroyedEvent";

export const GRAVITY_ACCELERATION = TICKS_FREQUENCY / 100;

class PhysicsEngine {
    constructor(
        private objectRepository: GameObjectRepository,
        private eventDispatcher: EventDispatcher
    ) {}

    update = () => {
        this.objectRepository.getAll().forEach((object) => {
            this.updatePosition(object);
            object.gravityEnabled && this.updateVelocity(object);
        });
    };

    private updatePosition(object: AbstractGameObject) {
        object.position.x += object.velocity.x;

        if (object.position.x + object.size.x < 0) {
            this.objectRepository.destroy(object);
            this.eventDispatcher.dispatch(new ObjectDestroyedEvent(object));
        }

        object.position.y += object.velocity.y;

        if (object.gravityEnabled && object.position.y < BASELINE_Y) {
            object.position.y = BASELINE_Y;
        }

        if (object instanceof Obstacle) {
            this.detectPlayerCollision(object);
        }
    }

    private updateVelocity(object: AbstractGameObject) {
        if (object.position.y > BASELINE_Y) {
            object.velocity.y -= GRAVITY_ACCELERATION;
        } else {
            object.velocity.y = 0;
        }
    }

    private detectPlayerCollision(obstacle: Obstacle) {
        this.objectRepository.players.forEach((player) => {
            if (obstacle.position.x > player.position.x + player.size.x) return;
            if (obstacle.position.x < player.position.x) return;
            if (obstacle.position.y + obstacle.size.y < player.position.y)
                return;

            this.eventDispatcher.dispatch(
                new CollisionEvent([obstacle, player])
            );
        });
    }
}

export default PhysicsEngine;
