import Square from './square';

class ImageAsset extends Square {
  constructor(options) {
    super(options);
    this.asset_class = "image";
    this.fillColor = "#777777";
    this.image_url = options.image_url;
    this.img = $.cloudinary.image(this.image_url)[0];
    // this.img = new Image;
    this.img.onload = () => {
      this.width = this.img.naturalWidth;
      this.height = this.img.naturalHeight;
      this.draw();
    };
  }

  draw(ctx) {
    if (!this.img.complete) {
      super.draw(ctx);
    } else {
      ctx && ctx.drawImage(this.img, ...this.pos);
    }
  }
}

export default ImageAsset;
