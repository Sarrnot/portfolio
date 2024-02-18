import Canvas from "../Engine/Graphics/Canvas";
import ObjectPainter from "../Engine/Graphics/ObjectPainter";
import SCALE_FACTOR from "../constants/SCALE_FACTOR";
import AbstractGameObject from "./AbstractGameObject";

class Ground extends AbstractGameObject {
    constructor(y: number, height: number, public color = "#000000") {
        super(
            { x: 0, y: y - height },
            { x: SCALE_FACTOR.x, y: height },
            { x: 0, y: 0 },
            false
        );
    }

    public draw(painter: ObjectPainter, canvas: Canvas) {
        if (!canvas.ctx) return;
        canvas.ctx.fillStyle = this.color;
        painter.fillRect({ x: 0, y: 0 }, this.size);
    }
}

export default Ground;
