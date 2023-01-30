input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    P1 = 0
    P2 = 0
    Ties = 0
    Rounds = 0
    OLED.writeStringNewLine("shall we play a game")
    basic.pause(2000)
    OLED.clear()
    OLED.writeStringNewLine("\"player 1 score-" + P1)
    OLED.newLine()
    OLED.writeStringNewLine("player 2 score-" + P2)
    OLED.newLine()
    OLED.writeStringNewLine("ties-" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("rounds-" + Rounds)
}
let Rounds = 0
let Ties = 0
let P2 = 0
let P1 = 0
reset()
basic.forever(function () {
	
})
