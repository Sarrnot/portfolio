import Coordinates from "../../Entity/Traits/Coordinates";
import SCALE_FACTOR from "../../constants/SCALE_FACTOR";

class Canvas {
    public ctx: CanvasRenderingContext2D | null;
    private size: Coordinates;
    private resizeCallbackQueue: Function[] = [];

    constructor(public canvas: HTMLCanvasElement) {
        this.ctx = canvas.getContext("2d");
        this.size = this.getCanvasSize();
        this.updateCanvasAttributes();
        this.attachResizeObserver();
    }

    public addResizeListener(callback: Function) {
        this.resizeCallbackQueue.push(callback);
    }

    public moveTo(x: number, y: number) {
        this.ctx?.moveTo(
            this.size.x * (x / SCALE_FACTOR),
            this.invertY(this.size.y * (y / SCALE_FACTOR))
        );
    }

    public lineTo(x: number, y: number) {
        this.ctx?.lineTo(
            this.size.x * (x / SCALE_FACTOR),
            this.invertY(this.size.y * (y / SCALE_FACTOR))
        );
    }

    private invertY(y: number) {
        return this.size.y - y;
    }

    private getCanvasSize() {
        const canvasRect = this.canvas.getBoundingClientRect();
        return {
            x: canvasRect.width,
            y: canvasRect.height,
        };
    }

    private updateCanvasAttributes() {
        const canvasRect = this.canvas.getBoundingClientRect();
        this.canvas.width = canvasRect.width;
        this.canvas.height = canvasRect.height;
    }

    private attachResizeObserver() {
        const observer = new ResizeObserver(() => {
            this.size = this.getCanvasSize();
            this.updateCanvasAttributes();
            this.resizeCallbackQueue.forEach((callback) => callback());
        });

        observer.observe(this.canvas);
    }
}

export default Canvas;
