def on_button_pressed_a():
    global GameOver, Score
    if GameOver == 1:
        GameOver = 0
        Score = 0
    else:
        if randint(0, 1) == 1:
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
        else:
            pins.digital_write_pin(DigitalPin.P0, 1)
            basic.show_icon(IconNames.SKULL)
            basic.pause(500)
            pins.digital_write_pin(DigitalPin.P0, 0)
            GameOver = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global GameOver, Score
    if GameOver == 1:
        GameOver = 0
        Score = 0
    else:
        if randint(0, 1) == 1:
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
        else:
            pins.digital_write_pin(DigitalPin.P0, 1)
            basic.show_icon(IconNames.SKULL)
            basic.pause(500)
            pins.digital_write_pin(DigitalPin.P0, 0)
            GameOver = 1
input.on_button_pressed(Button.B, on_button_pressed_b)

Score = 0
GameOver = 0
GameOver = 1
Score = 0

def on_forever():
    while GameOver == 1:
        basic.show_number(Score)
        basic.pause(1000)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        basic.pause(100)
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
basic.forever(on_forever)
