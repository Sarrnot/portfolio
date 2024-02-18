import Alignment from "../../Entity/Traits/Alignment";
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

    public moveTo(position: Coordinates) {
        this.ctx?.moveTo(
            this.calculateX(position.x),
            this.calculateY(position.y)
        );
    }

    public lineTo(position: Coordinates) {
        this.ctx?.lineTo(
            this.calculateX(position.x),
            this.calculateY(position.y)
        );
    }

    public fillRect(position: Coordinates, size: Coordinates) {
        this.ctx?.fillRect(
            this.calculateX(position.x),
            this.calculateY(position.y),
            this.calculateX(size.x),
            -this.calculateY(size.y, false)
        );
    }

    public fillText(
        text: string,
        font: string,
        position: Coordinates,
        color?: string,
        horizontalAlign: Alignment = "center"
    ) {
        if (!this.ctx) return;
        if (color) {
            this.ctx.fillStyle = color;
        }

        const textWidth = this.ctx.measureText(text).width;

        let x = this.calculateX(position.x);
        let y = this.calculateX(position.y);

        if (horizontalAlign === "center") {
            x -= textWidth / 2;
        }

        this.ctx.font = font;
        this.ctx.fillText(text, x, y);
    }

    public drawImage(
        image: CanvasImageSource,
        position: Coordinates,
        size: Coordinates
    ) {
        this.ctx?.drawImage(
            image,
            this.calculateX(position.x),
            this.calculateY(position.y + size.y),
            this.calculateX(size.x),
            this.calculateY(size.y, false)
        );
    }

    public clear() {
        this.ctx?.clearRect(0, 0, this.size.x, this.size.y);
    }

    private calculateX(x: number) {
        return this.size.x * (x / SCALE_FACTOR.x);
    }

    private calculateY(y: number, invert = true) {
        if (invert) {
            return this.invertY(this.size.y * (y / SCALE_FACTOR.y));
        }

        return this.size.y * (y / SCALE_FACTOR.y);
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
