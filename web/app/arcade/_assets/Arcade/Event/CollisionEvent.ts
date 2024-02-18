import AbstractGameObject from "../Entity/AbstractGameObject";
import EventInterface from "./EventInterface";

class CollisionEvent implements EventInterface {
    constructor(public objects: [AbstractGameObject, AbstractGameObject]) {}
}

export default CollisionEvent;
