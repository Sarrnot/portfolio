import Canvas from "../Engine/Graphics/Canvas";
import ObjectPainter from "../Engine/Graphics/ObjectPainter";
import BASELINE_Y from "../constants/BASELINE_Y";
import SCALE_FACTOR from "../constants/SCALE_FACTOR";
import AbstractGameObject from "./AbstractGameObject";

const HEIGHT = 3;

class Ground extends AbstractGameObject {
    constructor() {
        super(
            { x: 0, y: BASELINE_Y - HEIGHT },
            { x: SCALE_FACTOR.x, y: HEIGHT },
            { x: 0, y: 0 },
            false
        );
    }

    public draw(painter: ObjectPainter, canvas: Canvas) {
        painter.fillRect({ x: 0, y: 0 }, this.size);
    }
}

export default Ground;
