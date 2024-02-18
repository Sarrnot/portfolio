import Canvas from "../Engine/Graphics/Canvas";
import ObjectPainter from "../Engine/Graphics/ObjectPainter";
import AbstractGameObject from "./AbstractGameObject";
import Coordinates from "./Traits/Coordinates";

class Text extends AbstractGameObject {
    constructor(
        public position: Coordinates,
        public value: string,
        public fontSize: number,
        public opacity = 1,
        public velocity: Coordinates = { x: 0, y: 0 }
    ) {
        super(position, { x: 0, y: 0 }, velocity, false); // note: size could be calculated with ctx.measureText()
    }

    public draw(painter: ObjectPainter, canvas: Canvas) {
        canvas.fillText(
            this.value,
            `${this.fontSize}px sans-serif`,
            this.position,
            `rgba(0, 0, 0, ${this.opacity})`
        );
    }
}

export default Text;
