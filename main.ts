input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    for (let index = 0; index < 800; index++) {
        pins.digitalWritePin(DigitalPin.P16, 1)
        control.waitMicros(1500)
        pins.digitalWritePin(DigitalPin.P16, 0)
        control.waitMicros(1500)
    }
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    for (let index = 0; index < 133; index++) {
        pins.digitalWritePin(DigitalPin.P16, 1)
        control.waitMicros(3000)
        pins.digitalWritePin(DigitalPin.P16, 0)
        control.waitMicros(3000)
    }
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.showIcon(IconNames.Square)
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
