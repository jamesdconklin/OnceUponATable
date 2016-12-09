import Square from 'Square';

class ImageAsset extends Square {
  constructor(options) {
    super(options);
    this.asset_class = "image";
    this.fillColor = "#777777";
    this.image_url = options.image_url;
    this.img = $.cloudinary.image(
      this.image_url,
      {
        quality: 25,
        width: this.width,
        height: this.height,
        crop: "scale",
      }
    )[0];
    this.img.onload = () => {
      options.state.draw();
    };
  }

  draw(ctx, focus) {
    super.drawFocus(ctx, focus);
    if (!this.img.complete) {
      super.draw(ctx);
    } else {
      ctx.drawImage(this.img, ...this.pos);
    }
  }
}

export default ImageAsset;
