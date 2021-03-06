
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
loop = function () {

    requestAnimationFrame(loop);

    C.cls();
    C.dBX(stbx, debug);
/*
    C.hiDraw(function (ctx, canvas) {

        this.cls('#ffffff');

        // do anything with the context
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(0, 0, canvas.width / 2, canvas.height / 2);

    });
*/
};

C.canvas.addEventListener('click', function (e) {

    var pt = C.boxRel(e);

    console.log(pt[0].x + ',' + pt[0].y);

    stbx.x = pt[0].x;

    stbx.y = pt[0].y;
});

/*
C.canvas.addEventListener('touchstart', function (e) {

var pt = C.boxRel(e);

console.log(pt[0].x, pt[0].y);
});
 */

loop();
