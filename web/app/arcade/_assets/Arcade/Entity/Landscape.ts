import Canvas from "../Engine/Graphics/Canvas";
import ObjectPainter from "../Engine/Graphics/ObjectPainter";
import AbstractGameObject from "./AbstractGameObject";
import Coordinates from "./Traits/Coordinates";

class Landscape extends AbstractGameObject {
    constructor(
        public position: Coordinates,
        public size: Coordinates,
        public velocity: Coordinates,
        public image: HTMLImageElement,
        public opacity = 1
    ) {
        super(position, size, velocity, false);
    }

    public draw(painter: ObjectPainter, canvas: Canvas) {
        if (!canvas.ctx) return;

        canvas.ctx.globalAlpha = this.opacity;
        painter.drawImage(this.image, this.size);
    }
}

export default Landscape;
