input.onButtonPressed(Button.A, function () {
    val = randint(0, 2)
})
let val = 0
led.setBrightness(100)
basic.forever(function () {
    if (val == 0) {
        basic.showIcon(IconNames.Scissors)
    }
    if (val == 1) {
        basic.showIcon(IconNames.Square)
    }
    if (val == 2) {
        basic.showIcon(IconNames.Butterfly)
    }
})
