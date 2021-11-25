function Jaune () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function clignotement () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function Rouge () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function Orange () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
input.onButtonPressed(Button.A, function () {
    piéton = 1
})
function marche () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function Vert () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function Blanc () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
let piéton = 0
piéton = 0
basic.forever(function () {
    if (piéton == 0) {
        while (piéton == 0) {
            basic.showIcon(IconNames.No)
            Vert()
            basic.pause(2500)
            Jaune()
            basic.pause(1000)
            clignotement()
            basic.pause(3500)
        }
    }
    if (piéton == 1) {
        while (piéton == 1) {
            marche()
            basic.showIcon(IconNames.StickFigure)
            basic.pause(2000)
            clignotement()
            basic.showIcon(IconNames.No)
            basic.pause(250)
            marche()
            basic.showIcon(IconNames.StickFigure)
            basic.pause(250)
            clignotement()
            basic.showIcon(IconNames.No)
            basic.pause(250)
            marche()
            basic.showIcon(IconNames.StickFigure)
            basic.pause(250)
            clignotement()
            basic.showIcon(IconNames.No)
            basic.pause(250)
            marche()
            basic.showIcon(IconNames.StickFigure)
            basic.pause(250)
            piéton = 0
        }
    }
})
