input.onButtonPressed(Button.A, function () {
    if (GameOver == 1) {
        GameOver = 0
        Game = 1
        Score = 0
        AorB = randint(0, 1)
        basic.showString("A or B")
    } else if (Game == 1) {
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
    } else if (Game == 2) {
        GameOver = 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Game == 1) {
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
    }
})
input.onButtonPressed(Button.B, function () {
    if (GameOver == 1) {
        GameOver = 0
        Game = 2
        basic.showLeds(`
            . . . . .
            # . # . #
            . . . . .
            # . # . #
            . . . . .
            `)
    } else if (Game == 1) {
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
    } else if (Game == 2) {
        GameOver = 1
    }
})
input.onGesture(Gesture.Shake, function () {
    if (Game == 2) {
        Score = randint(1, 6)
        basic.showNumber(Score)
    }
})
let AorB = 0
let Game = 0
let TopScore = 0
let Score = 0
let GameOver = 0
GameOver = 1
Score = 0
TopScore = 0
basic.forever(function () {
    while (GameOver == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showNumber(TopScore)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P0, 0)
        if (GameOver == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
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
