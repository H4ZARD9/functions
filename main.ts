input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    P1 += 1
    Rounds += 1
    update_scoreboard()
})
function update_scoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("\"player A: " + P1)
    OLED.newLine()
    OLED.writeStringNewLine("player B: " + P2)
    OLED.newLine()
    OLED.writeStringNewLine("ties: " + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("rounds: " + Rounds)
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("Tie")
    Ties += 1
    Rounds += 1
    update_scoreboard()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    P2 += 1
    Rounds += 1
    update_scoreboard()
})
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
    update_scoreboard()
}
let Ties = 0
let P2 = 0
let Rounds = 0
let P1 = 0
reset()
