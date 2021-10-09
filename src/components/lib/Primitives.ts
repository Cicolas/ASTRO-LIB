import Graphics from "./Graphics";
import { Transform, Vector2 } from "./Mathf";

export namespace Primitives{
    export class Rectangle {
        public offset: Vector2;
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
            this.offset = new Vector2(-this.width/2, -this.height/2);
        }

        /**
         * Draw the rectangle itself
         * @param canvas the canvas context to draw the rectangle
         */
        public draw(canvas: CanvasRenderingContext2D = Graphics.canvas) {
            canvas.beginPath();
            canvas.save();

            canvas.translate(this.transform.position.x | 0, this.transform.position.y  | 0);
            canvas.rotate(this.transform.rotation);
            canvas.rect(this.offset.x | 0, this.offset.y | 0 , this.width, this.height);
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
        public static draw(position: Vector2, width: number, height: number, rotation: number = 0, offset: Vector2 = new Vector2(), canvas: CanvasRenderingContext2D = Graphics.canvas){
            canvas.beginPath();
            canvas.save();

            canvas.translate(position.x | 0, position.y  | 0);
            canvas.rotate(rotation);
            canvas.rect(offset.x | 0, offset.y | 0 , width, height);
            canvas.fill();

            canvas.restore();
            canvas.closePath();
        }
    }

    export class Circle {
        public offset: Vector2;
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
            this.offset = new Vector2(0, 0);
        }

        /**
         * Draw the rectangle itself
         * @param canvas the canvas context to draw the rectangle
         */
        public draw(canvas: CanvasRenderingContext2D = Graphics.canvas) {
            canvas.beginPath();
            canvas.save();

            canvas.translate(this.transform.position.x | 0, this.transform.position.y  | 0);
            canvas.rotate(this.transform.rotation);
            canvas.arc(this.offset.x | 0, this.offset.y | 0, this.radius, 0, 360);
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
        public static draw(position: Vector2, radius: number, rotation: number = 0, offset: Vector2 = new Vector2(), canvas: CanvasRenderingContext2D = Graphics.canvas){
            canvas.beginPath();
            canvas.save();

            canvas.translate(position.x | 0, position.y  | 0);
            canvas.rotate(rotation);
            canvas.arc(offset.x | 0, offset.y | 0, radius, 0, 360);
            canvas.fill();

            canvas.restore();
            canvas.closePath();
        }
    }

    export class Line {
        public start: Vector2;
        public end: Vector2;

        public get distance() : number {
            let a = this.start.sqrt(.5);
            let b = this.end.sqrt(.5);
            
            return (b.subtract(a)).sqrt().magnitude();
        }

        constructor(start: Vector2, end: Vector2) {
            this.start = start;
            this.end = end;
        }

        public draw(canvas: CanvasRenderingContext2D = Graphics.canvas) {
            canvas.beginPath();
            canvas.moveTo(this.start.x, this.start.y);
            canvas.lineTo(this.end.x, this.end.y);
            canvas.stroke();
            canvas.closePath();
        }

        public static draw(start: Vector2, end: Vector2, canvas: CanvasRenderingContext2D = Graphics.canvas){
            canvas.beginPath();
            canvas.moveTo(start.x, start.y);
            canvas.lineTo(end.x, end.y);
            canvas.stroke();
            canvas.closePath();
        }
    }
}
    