import Avatar from "../Avatar/Avatar";
import ObjectPainter from "../Engine/Graphics/ObjectPainter";
import AbstractGameObject from "./AbstractGameObject";
import Coordinates from "./Traits/Coordinates";

class Player extends AbstractGameObject {
    private image: HTMLImageElement;

    constructor(
        public position: Coordinates,
        public size: Coordinates,
        public velocity: Coordinates,
        public avatar: Avatar
    ) {
        super(position, size, velocity, true);

        this.image = new Image();
        this.image.src = avatar.imageSrc;
    }

    draw(painter: ObjectPainter) {
        painter.drawImage(this.image, this.size);
    }
}

export default Player;
