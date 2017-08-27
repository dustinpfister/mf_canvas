
// standard box
var stbx = {

  x: 160,
  y: 120,
  w: 160,
  h: 160,
  hw: 80,
  hh: 80,
  a: 0,
  
  // formating
  s: '#080808',
  f: '#008a00',
  i: 3

};

var loop = function(){

requestAnimationFrame(loop);

stbx.a += Math.PI /180;
//stbx.x += 0.01;

C.cls();
C.dBX(stbx,true);

};

loop();