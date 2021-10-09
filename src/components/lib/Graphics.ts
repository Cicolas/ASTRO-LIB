import Color from "./Color";

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
}

export default Graphics;