import Canvas from "../Engine/Graphics/Canvas";
import ObjectPainter from "../Engine/Graphics/ObjectPainter";
import Coordinates from "./Traits/Coordinates";

abstract class AbstractGameObject {
    constructor(
        public position: Coordinates,
        public size: Coordinates,
        public velocity: Coordinates,
        public gravityEnabled: boolean
    ) {}

    abstract draw(painter: ObjectPainter, canvas: Canvas): void;
}

export default AbstractGameObject;
