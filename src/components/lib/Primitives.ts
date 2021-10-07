import { Transform, Vector2 } from "./Mathf";

export namespace Primitives{
    export class Rectangle {
        public transform: Transform = new Transform;
        private width: number;
        private height: number;

        /**
         * Constructor for Rectangle class
         * @param position x coordinate
         * @param width the width of rectangle
         * @param height the height of rectangle
         */
        constructor(position: Vector2, width: number, height: number, rotation: number = 0) {
            this.transform.position = new Vector2(position.x, position.y);
            this.transform.rotation = Math.PI*rotation/180;
            this.width = width;
            this.height = height;
        }

        /**
         * Draw the rectangle itself
         * @param canvas the canvas context to draw the rectangle
         */
        public draw(canvas: CanvasRenderingContext2D) {
            canvas.beginPath();
            canvas.save();

            canvas.translate(this.transform.position.x, this.transform.position.y);
            canvas.rotate(this.transform.rotation);
            canvas.rect(-this.width/2, -this.height/2, this.width, this.height);
            canvas.fill();

            canvas.restore();
            canvas.closePath();
        }

        /**
         * Draw the rectangle without instanciating it
         * @param canvas the canvas context to draw the rectangle
         * @param position the vector of position
         * @param width the width of rectangle
         * @param height the height of rectangle
         * @param rotation rotation in degrees
         */
        public static draw(canvas: CanvasRenderingContext2D, position: Vector2, w: number, h: number, rotation: number = 0){
            const r = new Rectangle(position, w, h, rotation);
            r.draw(canvas);
        }
    }

    export class Circle {
        public transform: Transform = new Transform;
        private radius: number;

        /**
         * Constructor for Rectangle class
         * @param x x coordinate
         * @param y y coordinate
         * @param width the width of rectangle
         * @param height the height of rectangle
         */
        constructor(position: Vector2, radius: number) {
            this.transform.position = new Vector2(position.x, position.y);
            this.radius = radius;
        }

        /**
         * Draw the rectangle itself
         * @param canvas the canvas context to draw the rectangle
         */
        public draw(canvas: CanvasRenderingContext2D) {
            canvas.beginPath();
            canvas.save();

            canvas.translate(this.transform.position.x, this.transform.position.y);
            canvas.rotate(this.transform.rotation);
            canvas.arc(0, 0, this.radius, 0, 360);
            canvas.fill();

            canvas.restore();
            canvas.closePath();
        }

        /**
         * Draw the rectangle without instanciating it
         * @param canvas the canvas context to draw the rectangle
         * @param position the vector of position
         * @param width the width of rectangle
         * @param height the height of rectangle
         * @param rotation rotation in degrees
         */
        public static draw(canvas: CanvasRenderingContext2D, position: Vector2, r: number){
            const _r = new Circle(position, r);
            _r.draw(canvas);
        }
    }
}
    