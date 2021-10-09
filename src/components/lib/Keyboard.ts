namespace Keyboard {
    let pressedKeys: string[] = [];

    /** 
     * verify if the passed key is pressed or not
     * @param key wich key are verifing
     * @returns if the key is pressed or not
     */
    export function isDown(key: string): boolean {                
        return pressedKeys.includes(key);
    }

    /**
     * return last key pressed, very usefull for multiple input cases
     * @returns the last key pressed
     */
    export function getLastPresed(): string{
        return pressedKeys[pressedKeys.length-1];
    }

    /**
     * @returns return an array of all pressed keys
     */
    export function allPressed(): string[]{
        return pressedKeys;
    }

    /** INTERNAL FUNCTION FOR CONTROL THE PRESSEDKEYS */
    export function _addKey(key: string) {
        pressedKeys.push(key);
    }
    
    /** INTERNAL FUNCTION FOR CONTROL THE PRESSEDKEYS */
    export function _removeKey(key: string) {
        pressedKeys = pressedKeys.filter(k => k != key);
    }
}

export default Keyboard;