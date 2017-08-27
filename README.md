# mf_canvas

I am tried of writing the same things over, and over again when it comes to working things out in canvas vanilla js style. So I made this.

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