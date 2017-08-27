
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

var debug = false,
loop = function(){

requestAnimationFrame(loop);

C.cls();
C.dBX(stbx,debug);

};

loop();