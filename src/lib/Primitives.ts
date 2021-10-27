import Graphics from "./Graphics";
import { Transform, Vector2 } from "./Mathf";

export enum FillMode { 
    STROKE,
    FILL
}

export interface IPrimitive {
    offset: Vector2;
    transform: Transform;
    width: number;
    height: number;

    draw: (canvas?: CanvasRenderingContext2D) => void;
}

namespace Primitives{    
    export class Rectangle implements IPrimitive {
        public offset: Vector2;
        public transform: Transform = new Transform;
        public width: number;
        public height: number;

        /**
         * Constructor for Rectangle class
         * @param position x coordinate
         * @param width the width of rectangle
         * @param height the height of rectangle
         */
        constructor(position: Vector2, width: number, height: number, rotation: number = 0, offset: Vector2 = new Vector2()) {
            this.transform.position = new Vector2(position.x, position.y);
            this.transform.rotation = Math.PI*rotation/180;
            this.width = width;
            this.height = height;
            this.offset = offset;
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
            canvas.rect(-this.offset.x | 0, -this.offset.y | 0 , this.width, this.height);
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
            canvas.rect(-offset.x | 0, -offset.y | 0 , width, height);
            canvas.fill();

            canvas.restore();
            canvas.closePath();
        }
    }

    export class Circle  implements IPrimitive {
        public offset: Vector2;
        public transform: Transform = new Transform;
        public width: number;
        public height: number;
        public radius: number;

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
            this.width, this.height = radius*2;
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
            canvas.arc(-this.offset.x | 0, -this.offset.y | 0, this.radius, 0, 360);
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
            canvas.arc(-offset.x | 0, -offset.y | 0, radius, 0, 360);
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

    export class Polygon {
        public offset: Vector2 = new Vector2();
        public transform: Transform = new Transform;
        public points: Vector2[];
        private width: number;
        private height: number;

        /**
         * Constructor for polygon class
         * @param position x coordinate
         * @param width the width of polygon
         * @param height the height of polygon
         */
        constructor(position: Vector2, points: Vector2[], width: number, height: number, rotation: number = 0, offset: Vector2 = new Vector2()) {
            this.transform.position = new Vector2(position.x, position.y);
            this.transform.rotation = Math.PI*rotation/180;
            this.points = points;
            this.width = width;
            this.height = height;
            this.offset = offset;
        }

        /**
         * Draw the polygon itself
         * @param canvas the canvas context to draw the polygon
         */
        public draw(fillmode: FillMode, canvas: CanvasRenderingContext2D = Graphics.canvas) {
            canvas.beginPath();
            canvas.save();

            canvas.translate(this.transform.position.x-this.offset.x | 0, this.transform.position.y-this.offset.y | 0);
            canvas.rotate(this.transform.rotation);
            
            for (let i = 0; i < this.points.length; i++) {
                canvas.lineTo(this.points[i].x*this.width, this.points[i].y*this.width);
            }
            if (fillmode == FillMode.FILL)
                canvas.fill();
            else
                canvas.stroke();

            canvas.restore();
            canvas.closePath();
        }

        /**
         * Draw the polygon without instanciating it
         * @param canvas the canvas context to draw the polygon
         * @param position the vector of position
         * @param width the width of polygon
         * @param height the height of polygon
         * @param rotation rotation in degrees
         */
        public static draw(fillmode: FillMode, position: Vector2, points: Vector2[], width: number, height: number, rotation: number = 0, offset: Vector2 = new Vector2(), canvas: CanvasRenderingContext2D = Graphics.canvas){
            canvas.beginPath();
            canvas.save();

            canvas.translate(position.x-offset.x | 0, position.y-offset.y | 0);
            canvas.rotate(rotation);
            
            for (let i = 0; i < points.length; i++) {
            canvas.lineTo(points[i].x*width, points[i].y*width);
            }
            if (fillmode == FillMode.FILL)
                canvas.fill();
            else
                canvas.stroke();

            canvas.restore();
            canvas.closePath();
        }
    }

}

export default Primitives;