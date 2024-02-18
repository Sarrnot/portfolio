import Avatar from "../Avatar/Avatar";
import ObjectPainter from "../Engine/Graphics/ObjectPainter";
import AbstractGameObject from "./AbstractGameObject";
import Coordinates from "./Traits/Coordinates";

class Player extends AbstractGameObject {
    constructor(
        public position: Coordinates,
        public size: Coordinates,
        public velocity: Coordinates,
        public image: HTMLImageElement
    ) {
        super(position, size, velocity, true);
    }

    draw(painter: ObjectPainter) {
        painter.drawImage(this.image, this.size);
    }
}

export default Player;
