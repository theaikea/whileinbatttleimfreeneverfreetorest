<template>
  <div ref="canvasContainer" class="canvas-container"></div>
</template>

<script>
import p5 from 'p5';

export default {
  mounted() {
    this.sketch = new p5(this.createSketch, this.$refs.canvasContainer);
  },
  beforeUnmount() {
    this.sketch.remove();
  },
  methods: {
    createSketch(p) {
      let img;
      const scaleFactor = 2.5; // Increase the scale factor to make the image larger

      p.preload = () => {
        img = p.loadImage(new URL('../assets/dancingg.png', import.meta.url).href);
      };

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(this.$refs.canvasContainer);
        this.resizeCanvas(p, img); // Resize canvas to fit the container
      };

      p.draw = () => {
        const tiles = p.mouseX / 5; // Adjusted divisor to increase number of tiles slightly
        const tileSize = p.width / tiles;
        p.background(255);
        p.noStroke();
        p.translate(tileSize / 2, tileSize / 2);

        for (let x = 0; x < tiles; x++) {
          for (let y = 0; y < tiles; y++) {
            const imgX = p.int(p.map(x * tileSize, 0, p.width, 0, img.width));
            const imgY = p.int(p.map(y * tileSize, 0, p.height, 0, img.height));
            const c = img.get(imgX, imgY);
            const grey = (p.red(c) + p.green(c) + p.blue(c)) / 3;
            if (grey < 255) { // Only draw circles for non-white pixels
              const darkGrey = grey * 0.3; // Multiply by a factor less than 1 to darken
              const size = p.map(p.brightness(c), 0, 255, 5, 1); // Keep original range for circle sizes
              p.fill(darkGrey);
              p.ellipse(x * tileSize, y * tileSize, size, size);
            }
          }
        }
      };

      p.windowResized = () => {
        this.resizeCanvas(p, img); // Resize canvas when the window is resized
      };
    },
    resizeCanvas(p, img) {
      const container = this.$refs.canvasContainer;
      const scaleFactor = 0.8; // Scale down the canvas a bit
      const newWidth = container.clientWidth * scaleFactor;
      const newHeight = (img.height / img.width) * newWidth;
      p.resizeCanvas(newWidth, newHeight);
    }
  }
};
</script>

<style scoped>
.canvas-container {
  position: fixed;
  bottom: -32vh; /* Adjust the position upwards */
  left: -5.5vw; /* Move further to the left */
  width: 100vw; /* Reduce the width relative to the viewport width */
  height: calc(100vh + 20px); /* Reduce height */
  display: flex;
  justify-content: flex-start; /* Align the canvas to the left within the container */
  align-items: flex-end; /* Align the canvas at the bottom */
  z-index: 5; /* Lower z-index than the image */
}
</style>