<template>
    <div ref="container" class="relative h-screen w-screen flex items-center justify-center">
        <div class="flex flex-col items-center absolute left-[5%] top-[27%]">
            <div ref="canvasContainer" class="relative mt-14"></div>
            <div class="flex mt-8 gap-[4.5rem]"> 
                <button @click="startRecording" class="font-neue text-[2vw] hover:text-[#33da00]">
                    Start optagelse
                </button>
                <button @click="stopRecording" class="font-neue text-[2vw] hover:text-[#33da00]">
                    Slut optagelse
                </button>
            </div>
        </div>
        <div class="absolute right-1/3 top-1/3 text-lg font-novatica max-w-[400px]">
            <p class="font-bold font-neue text-2xl mb-5">DANS MED</p>
            <p>Sæt din krop fri og dans med.</p>
            <p>
                Optag dig selv mens du danser til din yndlingsmusik og vis hvem DU er!
                <br>Videoen bliver kun gemt hos dig, så du har fuld kontrol over den.
                <br>Del den gerne med os på sociale medier og bliv en del af kollektivets dansende kraft.
                <br>Vi glæder os til at se, hvad du kan skabe.
            </p>
        </div>
    </div>
</template>

<script>
import p5 from "p5";
import RecordRTC from "recordrtc";

export default {
    data() {
        return {
            recorder: null,
            cam: null,
            canvas: null,
            sketch: null,
        };
    },
    mounted() {
        this.sketch = new p5(this.createSketch, this.$refs.canvasContainer);
    },
    beforeUnmount() {
        if (this.sketch) {
            this.sketch.remove();
        }
    },
    methods: {
        createSketch(p) {
            let cam;
            p.setup = () => {
                const canvasSize = 410; // Sæt både bredde og højde til 410 for at gøre det firkantet
                this.canvas = p.createCanvas(canvasSize, canvasSize).parent(this.$refs.canvasContainer);
                cam = p.createCapture(p.VIDEO);
                cam.size(240 / 2, 240 / 2); // Reducer opløsningen af videooptagelsen
                cam.hide();
                this.cam = cam;
            };

            p.draw = () => {
                if (cam.loadedmetadata) {
                    p.image(cam, 0, 0, p.width, p.height); // Vis kamerafeedet ved lavere opløsning

                    let maxTiles = 90; // Maksimalt antal fliser
                    let tiles = p.int(p.map(p.mouseX, 0, p.width, 1, maxTiles)); // Kortlæg mouseX til antallet af fliser
                    tiles = p.constrain(tiles, 1, maxTiles); // Sikrer, at fliser er mellem 1 og maxTiles
                    let tileSize = p.width / tiles;

                    p.background(255); // Sæt baggrunden til hvid
                    p.fill(0); // Sæt udfyldningsfarve til sort
                    p.noStroke();

                    p.translate(tileSize / 3, tileSize / 3);

                    for (let x = 0; x < tiles; x++) {
                        for (let y = 0; y < tiles; y++) {
                            let imgX = p.int(p.map(x, 0, tiles, 0, cam.width));
                            let imgY = p.int(p.map(y, 0, tiles, 0, cam.height));

                            let c = cam.get(imgX, imgY);
                            let brightness = p.brightness(c);

                            // Beregn størrelse: mindre for lysere farver, større for mørkere farver
                            let size = p.map(brightness, 0, 255, 7.5, 0.25); // Juster størrelsesområdet: større for mørk, mindre for lys

                            // Tegn ellipse
                            p.ellipse(x * tileSize, y * tileSize, size, size);
                        }
                    }
                }
            };
        },
        startRecording() {
            const stream = this.canvas.elt.captureStream(30); // Fang canvas stream ved 30fps
            this.recorder = new RecordRTC(stream, {
                type: "video",
                mimeType: "video/mp4", // Specify MP4 as the mime type
            });
            this.recorder.startRecording();
        },
        stopRecording() {
            if (this.recorder) {
                this.recorder.stopRecording(() => {
                    const blob = this.recorder.getBlob();
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.style.display = "none";
                    a.href = url;
                    a.download = "recording.mp4"; // Change file extension to .mp4
                    document.body.appendChild(a);
                    a.click();
                    URL.revokeObjectURL(url);
                    document.body.removeChild(a);
                });
            }
        },
    },
};
</script>