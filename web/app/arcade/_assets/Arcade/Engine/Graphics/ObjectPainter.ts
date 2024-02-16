import AbstractGameObject from "../../Entity/AbstractGameObject";
import Canvas from "./Canvas";

class ObjectPainter {
    constructor(private canvas: Canvas, private object: AbstractGameObject) {
        canvas.moveTo(object.position.x, object.position.y);
    }

    public moveTo(offsetX: number, offsetY: number) {
        this.canvas.moveTo(
            this.object.position.x + offsetX,
            this.object.position.y + offsetY
        );
    }

    public lineTo(offsetX: number, offsetY: number) {
        this.canvas.lineTo(
            this.object.position.x + offsetX,
            this.object.position.y + offsetY
        );
    }
}

export default ObjectPainter;
