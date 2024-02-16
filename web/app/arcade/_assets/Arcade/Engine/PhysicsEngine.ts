import GameObjectRepository from "../Repository/GameObjectRepository";

class PhysicsEngine {
    constructor(private objectRepository: GameObjectRepository) {}

    updatePositions() {
        this.objectRepository.getAll().forEach(() => {
            // calculate
        });
    }
}

export default PhysicsEngine;
