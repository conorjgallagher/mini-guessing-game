input.onButtonPressed(Button.A, function () {
    if (GameOver == 1) {
        GameOver = 0
        Score = 0
        AorB = randint(0, 1)
    } else {
        if (AorB == 0) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.showIcon(IconNames.Yes)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P1, 0)
            Score += 1
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            AorB = randint(0, 1)
        } else {
            music.playTone(131, music.beat(BeatFraction.Whole))
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.showIcon(IconNames.Skull)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P0, 0)
            GameOver = 1
            if (Score > TopScore) {
                TopScore = Score
            }
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (GameOver == 0) {
        if (AorB == 0) {
            basic.showLeds(`
                . . # . .
                . # . # .
                # . . . #
                # # # # #
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                # # # . .
                # . . # .
                # # # . .
                # . . # .
                # # # # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (GameOver == 1) {
        GameOver = 0
        Score = 0
        AorB = randint(0, 1)
    } else {
        if (AorB == 1) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.showIcon(IconNames.Yes)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P1, 0)
            Score += 1
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            AorB = randint(0, 1)
        } else {
            music.playTone(131, music.beat(BeatFraction.Whole))
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.showIcon(IconNames.Skull)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P0, 0)
            GameOver = 1
            if (Score > TopScore) {
                TopScore = Score
            }
        }
    }
})
let TopScore = 0
let AorB = 0
let Score = 0
let GameOver = 0
GameOver = 1
Score = 0
basic.forever(function () {
    while (GameOver == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showNumber(TopScore)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        if (GameOver == 1) {
            basic.pause(100)
        }
        if (GameOver == 1) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        if (GameOver == 1) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
})
