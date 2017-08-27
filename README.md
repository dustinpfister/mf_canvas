# mf_canvas

I am tried of writing the same things over, and over again when it comes to working things out in canvas vanilla js style. So I made this.

The project is just a simple, but effective canvas solution that appends a single canvas to the body of the html document that I am using it in. Nothing fancy like layering or what not, I might make something more interesting for my mf projects, but don't hold you breath.

## Standard box

So I worked out my own standard when it comes to working with projects that pretty much just have to do with simple box areas with in my "mf" line of projects. Say hello to the "mf standard box", it looks like this.

```js
// mf standard box
var stbx = {

  x: 160, // x,y, width,height,halfWidth, halfHeight.
  y: 120,
  w: 160,
  h: 160,
  hw: 80,
  hh: 80,
  a: 0,   // rotation angle

  // formating
  s: '#080808', // stroke style
  f: '#008a00', // fill style
  i: 3 // 

};
```

## standard drawing

So yes I have a standard for this as well here it is.

```js

// standard drawing
var draw = {

  x: 160, // Y
  y: 120, // X
  w: 160, // Width
  h: 160, // Height
  a: 1, // Angle
  p: [-100, -100, 100, -100, 100, 100], // Points
  c: true, // Close
  l: true, // fiLl
  i: 3, // lIne wIdth
  s: '#ffffff', // Stroke
  f: '#8a0000' // Fill

};
```

The "stbx" standard is used here in mf_canvas, as well as in any other project that has to do with the storage, and manipulation of a stranded box.

## Basic rotation demo

So [check out this one](https://github.com/dustinpfister/mf_canvas/blob/master/demos/rotate.js) as well as all the other demos for example code on how to use this.

```js
debug = true,
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
```
The above code will help make the 'standard box' rotate.

## The methods

### C.cls(style)

just a clear screen method

```js
C.cls('#808080');
```

### C.dBX(stbx, debug)

Draw the given standard box to the canvas.

```js
C.dBX({

x:10, // x,y, width,height,halfWidth, halfHeight.
y:15,
w:32,
h:32,
hw:16,
hh:16,
a:0,   // rotation angle

// formating
s: '#080808', // stroke style
f: '#008a00', // fill style
i: 3

}, true);
```

### C.drawInfo(messArray, x, y, dy, font, style)

draw info to the canvas

```js
C.drawInfo([

    'box info: ',
    'x,y : ' + Math.floor(obj.x) + ',' + Math.floor(obj.y),
    'w,h : ' + obj.w + ',' + obj.h,
    'a : ' + obj.a.toFixed(2)

], obj.x - obj.hw, obj.y - obj.hh);
```

### C.dDr(drawObj);

This is what I have so far when it comes to handling a bunch of points. Although I do not care to make it part of the project, I threw together a quick star method just to show how to make a certain something with this.

```js
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
```

### C.boxRel(e)

Give back an array of points that are relative to the canvas, and not the browser window.

```js
C.canvas.addEventListener('click', function (e) {

    var pt = C.boxRel(e);

    console.log(pt[0].x+','+ pt[0].y);

});
```

### C.hiDraw(draw)

A high order function that gives me the context, and canvas to play with when called for. The method given will have the ctx, and canvas given to it by argument in (ctx,canvas) order, the this keyword will also ref the public API.

```js
C.hiDraw(function (ctx, canvas) {

    this.cls('#ffffff');

    // do anything with the context
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(0, 0, canvas.width / 2, canvas.height / 2);

});
```

## The props

C.canvas

Just a reference to the single canvas I made sure to put this in so that if something comes up that presents a need to get to it, it's there. However if I end up using it a lot that is a good indication that I need to develop this more.