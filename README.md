# mf_canvas

I am tried of writing the same things over, and over again when it comes to working things out in canvas vanilla js style. So I made this.

The project is just a simple, but effective canvas solution that appends a single canvas to the body of the html document that I am using it in. Nothing fancy like layering or what not, I might make something more interesting for my mf projects, but don't hold you breath.

## Standard box

So I worked out my own standard when it comes to working with projects that pretty much just have to do with simple box areas with in my "mf" line of projects. Say hello to the "mf standard box", it looks like this.

```js
// mf standard box
var stbx = {

  x: 160, //x,y, width,height,halfWidth, halfHeight.
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

### C.cls()

just a clear screen method

### C.dBX(stbx, debug)

Draw the given standard box to the canvas.

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

### C.boxRel(e)

Give back an array of points that are relative to the canvas, and not the browser window.

```js
C.canvas.addEventListener('click', function (e) {

    var pt = C.boxRel(e);

    console.log(pt[0].x+','+ pt[0].y);

});
```

### hiDraw

A high order function that gives me the context, and canvas to play with when called for

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