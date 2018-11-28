/**
 * Provides access to basic micro:bit functionality.
 */
//% color=#ff0062 weight=100 icon="\uf2db" block="Kodarklubben"
namespace kodarklubben {

    //% blockId=kodarklubben_spiral
    //% block="spiral"
    export function spiral() {
        let y = 0
        let x = 0
        led.stopAnimation()
        basic.clearScreen()
        y = 0
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(20)
        }
        x = 4
        for (let y = 0; y <= 4; y++) {
            led.plot(x, y)
            basic.pause(20)
        }
        y = 4
        for (let x = 0; x <= 4; x++) {
            led.plot(4 - x, y)
            basic.pause(20)
        }
        x = 0
        for (let y = 0; y <= 3; y++) {
            led.plot(x, 4 - y)
            basic.pause(20)
        }
        y = 1
        for (let x = 0; x <= 3; x++) {
            led.plot(x, y)
            basic.pause(20)
        }
        x = 3
        for (let y = 0; y <= 3; y++) {
            led.plot(x, y)
            basic.pause(20)
        }
        y = 3
        for (let x = 0; x <= 3; x++) {
            led.plot(4 - x, y)
            basic.pause(20)
        }
        x = 1
        y = 2
        led.plot(x, y)
        basic.pause(20)
        x = 2
        y = 2
        led.plot(x, y)
    }

    //% blockId=kodarklubben_name
    //% block="kodarklubben"
    export function kodarklubben() {
        basic.showString("Kodarklubben r.f.")
    }
}
