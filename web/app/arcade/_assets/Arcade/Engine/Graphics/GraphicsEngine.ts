import GameObjectRepository from "../../Repository/GameObjectRepository";
import Canvas from "./Canvas";
import ObjectPainter from "./ObjectPainter";

class GraphicsEngine {
    private canvas: Canvas;
    private shouldStop = false;

    constructor(
        canvas: HTMLCanvasElement,
        private objectRepository: GameObjectRepository
    ) {
        this.canvas = new Canvas(canvas);
        this.canvas.addResizeListener(this.render);
    }

    start() {
        requestAnimationFrame(() => {
            if (!this.shouldStop) {
                this.render();
                this.start();
            } else {
                this.shouldStop = false;
            }
        });
    }

    stop() {
        this.shouldStop = true;
    }

    private render = () => {
        this.objectRepository.getAll().forEach((object) => {
            const objectPainter = new ObjectPainter(this.canvas, object);
            object.draw(objectPainter, this.canvas);
        });
    };
}

export default GraphicsEngine;
