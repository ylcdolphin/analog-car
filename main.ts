radio.onReceivedValue(function (name, value) {
    if (name == "X") {
        dif = Math.map(value, 0, 1000, -100, 100)
    } else if (name == "Y") {
        bias = Math.map(value, 0, 1000, -150, 150)
    }
})
let rws = 0
let lws = 0
let bias = 0
let dif = 0
radio.setGroup(1)
basic.forever(function () {
    lws = bias + dif
    rws = bias - dif
    if (lws < -20) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, lws * -1)
    } else if (lws > 20) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, lws)
    } else {
        maqueen.motorStop(maqueen.Motors.M1)
    }
    if (rws < -20) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, rws * -1)
    } else if (rws > 20) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, rws)
    } else {
        maqueen.motorStop(maqueen.Motors.M2)
    }
})
