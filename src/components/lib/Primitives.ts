export namespace Primitives{    
    export class Rectangle {
        public x: number;
        public y: number;
        public w: number;
        public h: number;

        constructor(x: number, y: number, w: number, h: number) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        }

        public draw(canvas: CanvasRenderingContext2D) {
            canvas.beginPath();
            canvas.fillRect(this.x, this.y, this.w, this.h);
            canvas.stroke();
            canvas.closePath();
        }

        public static draw(canvas: CanvasRenderingContext2D, x: number, y: number, w: number, h: number){
            const r = new Rectangle(x, y, w, h);
            r.draw(canvas);
        }
    }
}
    