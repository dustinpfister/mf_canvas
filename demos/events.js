
// standard box
var stbx = {

    x : 160,
    y : 120,
    w : 160,
    h : 160,
    hw : 80,
    hh : 80,
    a : 0,

    // formating
    s : '#080808',
    f : '#008a00',
    i : 3

};

var debug = true,
i = 0,
maxI = 720,
loop = function () {

    requestAnimationFrame(loop);

    stbx.a = Math.PI * 2 / maxI * i;

    C.cls();
    C.dBX(stbx, debug);

    i += 1;
    if (i === maxI) {
        i = 0;
    }

};

loop();
