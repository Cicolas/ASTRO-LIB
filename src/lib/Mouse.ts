import { Vector2 } from "./Mathf";

namespace Mouse{
    export let position: Vector2;
    let pressedMouse: number[] = [];

    /** 
     * verify if the passed button is pressed or not
     * @param key wich button are verifing
     * @returns if the button is pressed or not
     */
    export function isDown(key: number): boolean {
        return pressedMouse.includes(key);
    }

    /**
     * @returns return an array of all pressed button
     */
    export function allPressed(): number[]{
        return pressedMouse;
    }

    /** INTERNAL FUNCTION FOR CONTROL THE PRESSEDBUTTONS */
    export function _addButton(key: number) {
        pressedMouse.push(key);
    }
    
    /** INTERNAL FUNCTION FOR CONTROL THE PRESSEDBUTTONS */
    export function _removeButton(key: number) {
        pressedMouse = pressedMouse.filter(k => k != key);
    }
}

export default Mouse;