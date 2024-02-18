import AbstractGameObject from "../../Entity/AbstractGameObject";
import Coordinates from "../../Entity/Traits/Coordinates";
import Canvas from "./Canvas";

class ObjectPainter {
    constructor(private canvas: Canvas, private object: AbstractGameObject) {
        canvas.moveTo(object.position);
    }

    public moveTo(offsetX: number, offsetY: number) {
        this.canvas.moveTo({
            x: this.object.position.x + offsetX,
            y: this.object.position.y + offsetY,
        });
    }

    public lineTo(localPosition: Coordinates) {
        this.canvas.lineTo({
            x: this.object.position.x + localPosition.x,
            y: this.object.position.y + localPosition.y,
        });
    }
    public fillRect(localPosition: Coordinates, size: Coordinates) {
        this.canvas.fillRect(
            {
                x: this.object.position.x + localPosition.x,
                y: this.object.position.y + localPosition.y,
            },
            size
        );
    }

    drawImage(image: HTMLImageElement, size: Coordinates) {
        this.canvas.drawImage(image, this.object.position, size);
    }
}

export default ObjectPainter;
