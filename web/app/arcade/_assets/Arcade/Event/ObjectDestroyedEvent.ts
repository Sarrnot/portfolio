import AbstractGameObject from "../Entity/AbstractGameObject";
import EventInterface from "./EventInterface";

class ObjectDestroyedEvent implements EventInterface {
    constructor(public object: AbstractGameObject) {}
}

export default ObjectDestroyedEvent;
