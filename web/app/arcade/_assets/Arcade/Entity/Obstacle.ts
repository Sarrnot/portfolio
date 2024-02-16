import Canvas from "../Engine/Graphics/Canvas";
import ObjectPainter from "../Engine/Graphics/ObjectPainter";
import AbstractGameObject from "./AbstractGameObject";
import Coordinates from "./Traits/Coordinates";

class Obstacle extends AbstractGameObject {
    constructor(
        public position: Coordinates,
        public size: Coordinates,
        public velocity: Coordinates
    ) {
        super(position, size, velocity);
    }

    public draw(painter: ObjectPainter, canvas: Canvas) {
        painter.lineTo(0, this.size.y);
        painter.lineTo(this.size.x, this.size.y);
        painter.lineTo(this.size.x, 0);
        canvas.ctx?.stroke();
    }
}

export default Obstacle;
