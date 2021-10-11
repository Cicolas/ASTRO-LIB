import Graphics from "./Graphics";
import Keyboard from "./Keyboard";
import { Vector2 } from "./Mathf";
import Mouse from "./Mouse";

/**
 * Game class, it's an abstract class that describe your game cycle
 */
namespace Astro {
    export class Game {
        public fps: number = 0;
        public dt: number = 0;
        private _timeElapsed: number = 0;

        constructor(width: number, height: number, existentElement?: HTMLCanvasElement) {
            let canvasElement: HTMLCanvasElement;
            if (existentElement)
                canvasElement = existentElement;
            else {
                canvasElement = document.createElement("canvas") as HTMLCanvasElement;
                canvasElement.width = width;
                canvasElement.height = height;
                canvasElement.id = "game-canvas";
                document.body.appendChild(canvasElement);
            }
            const c: CanvasRenderingContext2D = canvasElement.getContext("2d");
            c.imageSmoothingEnabled = false;

            Graphics.canvas = c;

            this.KeyboardHandler();
            this.MouseHandler();
            this.UpdateNRender();
        }

        private KeyboardHandler(){
            document.addEventListener("keydown", (k) => {
                if (!k.repeat) {
                    if (this.onKeyDown)
                    this.onKeyDown(k);

                    Keyboard._addKey(k.key);
                    
                    // console.log("down");
                }
                Keyboard.isDown(k.key);
            });
            document.addEventListener("keyup", (k) => {
                if (!k.repeat) {
                    if (this.onKeyUp)
                    this.onKeyUp(k);

                    Keyboard._removeKey(k.key);
                    // console.log("up");
                    
                }
            });
        }

        private MouseHandler() {
            Graphics.canvas.canvas.addEventListener("mousedown", (b) => {
                if (this.onMouseDown)
                    this.onMouseDown(b);
                Mouse._addButton(b.button);
                b.preventDefault();
            });
            Graphics.canvas.canvas.addEventListener("mouseup", (b) => {
                if (this.onMouseUp)
                    this.onMouseUp(b);
                Mouse._removeButton(b.button);
            });
            Graphics.canvas.canvas.addEventListener("mousemove", (m) => {
                Mouse.position = new Vector2(m.offsetX, m.offsetY);
            });

        }

        private UpdateNRender(){
            requestAnimationFrame((t) => {
                this.dt = (t-this._timeElapsed)/1000;
                this.fps = 1/(this.dt*60)*60;           
                this._timeElapsed = t;
                
                this.update(this.dt);
                this.draw();

                this.UpdateNRender();
            });
        }

        public _load: () => void;
        
        /** Load callback is called once time, on load, your game */
        public set load(v : () => void) {
            this._load = v;
            this._load();
        }
        

        /** Update callback is called 60 times per second your main game logic should be here */
        public update: (dt: number) => void;

        /** 
         *  Draw callback is where all your drawable stuffs should be 
         *  @param time it return how time elapsed since start
        */
        public draw: () => void;

        /** 
         *  onKeyDown callback is called when a key is pressed 
         *  @param key your keyboard event of your key
        */
        public onKeyDown?: (key: KeyboardEvent) => void;
        /** 
         *  onKeyDown callback is called when a key is released
         *  @param key your keyboard event of your key 
         */
        public onKeyUp?: (key: KeyboardEvent) => void;

        /** 
         *  onKeyDown callback is called when a key is pressed 
         *  @param key your keyboard event of your key
        */
        public onMouseDown?: (button: MouseEvent) => void;
        /** 
         *  onKeyDown callback is called when a key is released
         *  @param key your keyboard event of your key 
         */
        public onMouseUp?: (button: MouseEvent) => void;
    }
}

export default Astro;