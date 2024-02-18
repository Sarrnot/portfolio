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
        super(position, size, velocity, false);
    }

    public draw(painter: ObjectPainter, canvas: Canvas) {
        painter.lineTo({ x: 0, y: this.size.y });
        painter.lineTo({ x: this.size.x, y: this.size.y });
        painter.lineTo({ x: this.size.x, y: 0 });
        canvas.ctx?.stroke();
    }
}

export default Obstacle;
