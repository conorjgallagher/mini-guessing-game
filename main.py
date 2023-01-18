def on_button_pressed_a():
    global GameOver, Game, Score, AorB, TopScore
    if GameOver == 1:
        GameOver = 0
        Game = 1
        Score = 0
        AorB = randint(0, 1)
        basic.show_string("A or B")
    elif Game == 1:
        if AorB == 0:
            pins.digital_write_pin(DigitalPin.P1, 1)
            basic.show_icon(IconNames.YES)
            basic.pause(500)
            pins.digital_write_pin(DigitalPin.P1, 0)
            Score += 1
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
            """)
            AorB = randint(0, 1)
        else:
            music.play_tone(131, music.beat(BeatFraction.WHOLE))
            pins.digital_write_pin(DigitalPin.P0, 1)
            basic.show_icon(IconNames.SKULL)
            basic.pause(500)
            pins.digital_write_pin(DigitalPin.P0, 0)
            GameOver = 1
            if Score > TopScore:
                TopScore = Score
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    if Game == 1:
        if GameOver == 0:
            if AorB == 0:
                basic.show_leds("""
                    . . # . .
                                        . # . # .
                                        # . . . #
                                        # # # # #
                                        # . . . #
                """)
                basic.show_leds("""
                    . . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                """)
            else:
                basic.show_leds("""
                    # # # . .
                                        # . . # .
                                        # # # . .
                                        # . . # .
                                        # # # # .
                """)
                basic.show_leds("""
                    . . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                """)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global GameOver, Game, Score, AorB, TopScore
    if GameOver == 1:
        GameOver = 0
        Game = 2
        basic.show_leds("""
            . . . . .
                        # . # . #
                        . . . . .
                        # . # . #
                        . . . . .
        """)
    elif Game == 1:
        if AorB == 1:
            pins.digital_write_pin(DigitalPin.P1, 1)
            basic.show_icon(IconNames.YES)
            basic.pause(500)
            pins.digital_write_pin(DigitalPin.P1, 0)
            Score += 1
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
            """)
            AorB = randint(0, 1)
        else:
            music.play_tone(131, music.beat(BeatFraction.WHOLE))
            pins.digital_write_pin(DigitalPin.P0, 1)
            basic.show_icon(IconNames.SKULL)
            basic.pause(500)
            pins.digital_write_pin(DigitalPin.P0, 0)
            GameOver = 1
            if Score > TopScore:
                TopScore = Score
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global Score
    if Game == 2:
        Score = randint(1, 6)
        basic.show_number(Score)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

AorB = 0
Game = 0
TopScore = 0
Score = 0
GameOver = 0
GameOver = 1
Score = 0
TopScore = 0

def on_forever():
    while GameOver == 1:
        pins.digital_write_pin(DigitalPin.P1, 1)
        pins.digital_write_pin(DigitalPin.P0, 1)
        basic.show_number(TopScore)
        basic.pause(1000)
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P0, 0)
        if GameOver == 1:
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
            """)
            basic.pause(100)
        if GameOver == 1:
            pins.digital_write_pin(DigitalPin.P1, 1)
            basic.show_leds("""
                . . # . .
                                . . . # .
                                # # # # #
                                . . . # .
                                . . # . .
            """)
            pins.digital_write_pin(DigitalPin.P1, 0)
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
            """)
        if GameOver == 1:
            pins.digital_write_pin(DigitalPin.P0, 1)
            basic.show_leds("""
                . . # . .
                                . # . . .
                                # # # # #
                                . # . . .
                                . . # . .
            """)
            pins.digital_write_pin(DigitalPin.P0, 0)
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
            """)
basic.forever(on_forever)
