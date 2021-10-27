import Graphics from "./Graphics";
import { Transform, Vector2 } from "./Mathf";
import Primitives, { IPrimitive } from "./Primitives";

export enum BodyType {
    Static,
    Dynamic,
}

namespace Beta.Physics {
    export class World {
        public gravity: Vector2 = new Vector2();

        public objList: PObject[] = [];

        constructor(gravity?: Vector2) {
            if (gravity) {
                this.gravity = gravity;
            }
        }

        public addObject(obj: PObject) {
            this.objList.push(obj);
        }

        public update(dt) {
            for (let i = 0; i < this.objList.length; i++) {
                const value = this.objList[i];
                // console.log(value);
                value.velocity = value.velocity.add(this.gravity.multiply(1));

                // console.log(this.AABBCollision(value));

                const collision = this.AABBCollision(value);

                const cX = CheckPoint(this, new Vector2(
                    value.transform.position.x +
                        ((value.velocity.x > 0)? (value.shape.width-value.shape.offset.x): -value.shape.offset.x) +
                        // value.shape.width +
                        value.velocity.x * dt,
                    value.transform.position.y
                ))
                const cY = CheckPoint(this, new Vector2(
                    value.transform.position.x,
                    value.transform.position.y +
                        ((value.velocity.y > 0)? (value.shape.height-value.shape.offset.y): -value.shape.offset.y) +
                        // value.shape.height +
                        value.velocity.y * dt
                )) 

                if (collision) {
                    if (!value.wasColliding) { //collision enter
                        value.wasColliding = true;

                        value.CollisionEnter(collision);
                    }

                    if (cY && cY !== value) {                            
                        value.velocity.y *= -value.body.bounciness;
                    }

                    if (cX && cX !== value) {
                        value.velocity.x *= -value.body.bounciness;
                    }
                }else {
                    if (value.wasColliding) { //collision exit
                        value.wasColliding = false;
                        value.CollisionExit(collision);
                        // value.velocity = value.velocity.multiply(value.body.bounciness);
                    }
                }
                value.update(dt);
            }
        }

        private AABBCollision(object: PObject): PObject {
            for (let i = 0; i < this.objList.length; i++) {
                // debugger;
                const value = this.objList[i];
                if (value !== object) {
                    // debugger;
                    const w1 = object.shape.width;
                    const h1 = object.shape.height;
                    const w2 = value.shape.width;
                    const h2 = value.shape.height;

                    const x1 =
                        object.transform.position.x - object.shape.offset.x;
                    const y1 =
                        object.transform.position.y - object.shape.offset.y;
                    const x2 =
                        value.transform.position.x - value.shape.offset.x;
                    const y2 =
                        value.transform.position.y - value.shape.offset.y;

                    if (
                        x1 + w1 >= x2 &&
                        x1 <= x2 + w2 &&
                        y1 + h1 >= y2 &&
                        y1 <= y2 + h2
                    ) {
                        return value;
                    }
                }
            }
            return null;
        }

    }

    export class PObject {
        private _name: string;

        public get name(): string {
            return this._name;
        }
        private set name(v: string) {
            this._name = v;
        }

        public body: Body;
        public shape: IPrimitive;
        public velocity: Vector2;
        public transform: Transform = new Transform();
        public wasColliding: boolean = false;
        private world: World;

        constructor(
            position: Vector2,
            options: { name?: string; body: Body; shape: IPrimitive },
            world: World
        ) {
            this.transform.position = position;
            this.name = options.name ? options.name : Date.now().toString();
            this.body = options.body;
            this.shape = options.shape;
            this.velocity = new Vector2();
            this.world = world;
            world.addObject(this);
        }

        public update(dt) {
            if (this.body.bodyType === BodyType.Dynamic) {
                this.transform.position = this.transform.position.add(
                    this.velocity.multiply(dt)
                );
            }
            this.shape.transform.position = this.transform.position;
        }

        // TODO: Add mass to equation
        public addForce(other: Vector2) {
            this.velocity = this.velocity.add(other);
        }

        public draw(canvas: CanvasRenderingContext2D = Graphics.canvas) {
            this.shape.draw(canvas);
        }

        public CollisionEnter: (other: PObject) => void = () => {};
        public CollisionExit: (other: PObject) => void = () => {};
    }

    export class Body {
        public bodyType: BodyType;
        public friction: number;
        public bounciness: number;
        public mass: number;
        public gravityScale: number;

        constructor(options: {
            bodyType: BodyType;
            mass: number;
            friction?: number;
            bounciness?: number;
            gravityScale?: number;
        }) {
            if (options) {
                this.bodyType = options.bodyType;
                this.mass = options.mass;
                this.friction = options.friction ? options.friction : 0;
                this.bounciness = options.bounciness ? options.bounciness : 0;
                this.gravityScale = options.gravityScale
                    ? options.gravityScale
                    : 0;
            }
        }
    }

    function CheckPoint(world: World, point: Vector2): PObject {
        for (let i = 0; i < world.objList.length; i++) {
            const value = world.objList[i];
            const w2 = value.shape.width;
            const h2 = value.shape.height;

            const x1 = point.x;
            const y1 = point.y;
            const x2 = value.transform.position.x - value.shape.offset.x;
            const y2 = value.transform.position.y - value.shape.offset.y;

            if (x1 >= x2 && x1 <= x2 + w2 && y1 >= y2 && y1 <= y2 + h2) {
                return value;
            }
        }
        return null;
    }
}

export default Beta.Physics;
