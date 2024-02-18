import GameObjectRepository from "../../Repository/GameObjectRepository";
import Canvas from "./Canvas";
import ObjectPainter from "./ObjectPainter";

class GraphicsEngine {
    private shouldStop = false;

    constructor(
        private objectRepository: GameObjectRepository,
        private canvas: Canvas
    ) {
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
        this.canvas.clear();

        this.objectRepository.getAll().forEach((object) => {
            if (!this.canvas.ctx) return;

            this.canvas.ctx.beginPath();
            this.canvas.ctx.strokeStyle = "#000000";
            this.canvas.ctx.fillStyle = "#000000";
            this.canvas.ctx.globalAlpha = 1;
            const objectPainter = new ObjectPainter(this.canvas, object);
            object.draw(objectPainter, this.canvas);
            this.canvas.ctx.closePath();
        });
    };
}

export default GraphicsEngine;
