export namespace Primitives{
    export class Rectangle {
        public x: number;
        public y: number;
        public w: number;
        public h: number;

        /**
         * Constructor for Rectangle class
         * @param x x coordinate
         * @param y y coordinate
         * @param width the width of rectangle
         * @param height the height of rectangle
         */
        constructor(x: number, y: number, width: number, height: number) {
            this.x = x;
            this.y = y;
            this.w = width;
            this.h = height;
        }

        /**
         * Draw the rectangle itself
         * @param canvas the canvas context to draw the rectangle
         */
        public draw(canvas: CanvasRenderingContext2D) {
            canvas.beginPath();
            canvas.fillRect(this.x, this.y, this.w, this.h);
            canvas.stroke();
            canvas.closePath();
        }

        /**
         * Draw the rectangle without instanciating it
         * @param canvas the canvas context to draw the rectangle
         * @param x x coordinate
         * @param y y coordinate
         * @param width the width of rectangle
         * @param height the height of rectangle
         */
        public static draw(canvas: CanvasRenderingContext2D, x: number, y: number, w: number, h: number){
            const r = new Rectangle(x, y, w, h);
            r.draw(canvas);
        }
    }
}
    