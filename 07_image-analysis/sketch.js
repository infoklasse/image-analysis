let imageMaterial;

function preload() {
  imageMaterial = loadImage("img/c.jpg");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  
  imageMaterial.loadPixels();

  for (let y = 0; y < imageMaterial.height; y++) {
    for (let x = 0; x < imageMaterial.width; x++) {

      const in_color = imageMaterial.get(x, y);

      const r = red(in_color);

      let out_color;
      if (r < 25) {
        out_color = color(255, 255, 255);
      }

      if (r > 25 && r < 75) {
        out_color = color(255, 0, 0);
      }

      if (r > 75) {
        out_color = color(0, 0, 0);
      }

      imageMaterial.set(x, y, out_color);
    }
  }

  imageMaterial.updatePixels();
  noSmooth();
  image(imageMaterial, 0, 0, width, height);
  noLoop();
}
