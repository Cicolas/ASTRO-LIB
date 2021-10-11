import Color from "./Color";
import { Vector2 } from "./Mathf";
import Primitives from "./Primitives";

namespace Graphics {
    export let canvas: CanvasRenderingContext2D;

    export function setColor(color: Color, canvas: CanvasRenderingContext2D = Graphics.canvas){
        canvas.fillStyle = "rgba("+color.r+", "+color.g+", "+color.b+", "+color.a+")";
        canvas.strokeStyle = "rgba("+color.r+", "+color.g+", "+color.b+", "+color.a+")";
    }

    export function setColorString(color: string | CanvasGradient | CanvasPattern, canvas: CanvasRenderingContext2D = Graphics.canvas){
        canvas.fillStyle = color;
        canvas.strokeStyle = color;
    }

    export function clear(x: number = 0, y: number = 0, width: number = 9999, height: number = 9999, canvas: CanvasRenderingContext2D = Graphics.canvas){
        canvas.clearRect(x, y, width, height);
    }

    export function backgroundColor(color: Color, canvas: CanvasRenderingContext2D = Graphics.canvas){
        canvas.fillStyle = "rgba("+color.r+", "+color.g+", "+color.b+", "+color.a+")";
        Primitives.Rectangle.draw(new Vector2(), canvas.canvas.width, canvas.canvas.height);
    }

    export function backgroundColorString(color: string | CanvasGradient | CanvasPattern, canvas: CanvasRenderingContext2D = Graphics.canvas){
        canvas.fillStyle = color;
        Primitives.Rectangle.draw(new Vector2(), canvas.canvas.width, canvas.canvas.height);
    }

    export function drawImage(
        image: CanvasImageSource, 
        position: Vector2, 
        rotation: number = 0, 
        offset: Vector2 = new Vector2(),  
        scaleX: number = 1, scaleY?: number, 
        canvas: CanvasRenderingContext2D = Graphics.canvas) {
            const s = scaleY? new Vector2(scaleX, scaleY): new Vector2(scaleX, scaleX);
            
            canvas.drawImage(image, position.x, position.y, (image.width as number)*s.x, (image.height as number)*s.y);
            // canvas.drawImage(image, position.x, position.y, 100, 100);
    }
}

export default Graphics;