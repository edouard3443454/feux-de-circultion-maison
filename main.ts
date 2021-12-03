function jaune () {
    pins.digitalWritePin(DigitalPin.P1, 1)
}
function feux_circultion () {
    orange2()
    rouge2()
    vert()
    basic.pause(5000)
    vert2()
    jaune()
    basic.pause(2000)
    jaune2()
    rouge()
    basic.pause(2000)
}
function blanche2 () {
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function piéton () {
    orange2()
    blanche()
    basic.pause(5000)
    blanche2()
    for (let index = 0; index < 4; index++) {
        orange()
        basic.pause(1000)
        orange2()
        basic.pause(1000)
    }
    orange2()
}
function orange2 () {
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function jaune2 () {
    pins.digitalWritePin(DigitalPin.P1, 0)
}
function rouge2 () {
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function orange () {
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function blanche () {
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function vert2 () {
    pins.digitalWritePin(DigitalPin.P0, 0)
}
function rouge () {
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P0, 1)
}
basic.forever(function () {
    feux_circultion()
    if (input.buttonIsPressed(Button.A)) {
        let pieton = 0
        piéton()
        if (pieton == 1) {
        	
        }
    }
})
