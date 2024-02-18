import images from "../images";

class ImageRepository {
    public images: Record<keyof typeof images, HTMLImageElement>;

    constructor() {
        this.images = {
            bunny: this.createImage(images.bunny),
            bush: this.createImage(images.bush),
            deer: this.createImage(images.deer),
            fox: this.createImage(images.fox),
            grass: this.createImage(images.grass),
            mushroom1: this.createImage(images.mushroom1),
            mushroom2: this.createImage(images.mushroom2),
            mushroom3: this.createImage(images.mushroom3),
            rock: this.createImage(images.rock),
            tree1: this.createImage(images.tree1),
            tree2: this.createImage(images.tree2),
            tree3: this.createImage(images.tree3),
            tree4: this.createImage(images.tree4),
            trunk: this.createImage(images.trunk),
        };
    }

    private createImage(image: { src: string }) {
        const imageElement = new Image();
        imageElement.src = image.src;
        return imageElement;
    }
}

export default ImageRepository;
