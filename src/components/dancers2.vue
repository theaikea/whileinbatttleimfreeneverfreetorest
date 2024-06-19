<template>
    <div ref="canvasContainer"></div>
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
  
        p.preload = () => {
          img = p.loadImage(new URL('../assets/dancing.png', import.meta.url).href);
        };
  
        p.setup = () => {
          // Set canvas size to be longer (taller)
          p.createCanvas(850, 1200); // Adjusted height to make the canvas taller
        };
  
        p.draw = () => {
          const tiles = p.mouseX / 3; // Adjusted divisor to increase number of tiles slightly
          const tileSize = 1500/ tiles;
          p.background(255);
          p.noStroke();
          p.translate(tileSize / 2, tileSize / 2);
  
          for (let x = tiles - 1; x >= 0; x--) { // Loop in reverse order for x
            for (let y = tiles - 1; y >= 0; y--) { // Loop in reverse order for y
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
          // Adjust canvas size if the window is resized
          p.resizeCanvas(850, 1200); // Ensure the resized canvas remains the same aspect ratio
        };
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any necessary styling for the canvas container */
  
  </style>