

var star = function (px, py, radius, points, skip) {

    var pt = 0,
    r,
    x,
    y,
    draw;

    px = px || 0;
    py = py || 0;
    points = points || 5;
    skip = skip || 2;
    radius = radius || 50;

    draw = {

        x : px, // Y
        y : py, // X
        w : radius * 2, // Width
        h : radius * 2, // Height
        a : 0, // Angle
        p : [], // Points
        c : true, // Close
        l : false, // fiLl
        i : 1, // lIne wIdth
        s : '#ffffff', // Stroke
        f : '#8a0000' // Fill

    };

    while (pt < points) {

        r = Math.PI * 2 / points * (pt * skip),
        x = Math.cos(r) * radius,
        y = Math.sin(r) * radius;

        draw.p.push(x);
        draw.p.push(y);

        pt += 1;
    }

    return draw;

}

C.cls();
C.dDr(star(160, 120, 110, 360, 206));
