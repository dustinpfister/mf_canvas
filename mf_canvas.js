var C = (function () {

    var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');

    canvas.width = 320;
    canvas.height = 240;

    document.body.appendChild(canvas);

    // api
    return {

        // ref to canvas if needed
        canvas : canvas,

        cls : function () {

            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

        },

        // draw debug overay for a 'standard_box'
        dBX_debug : function (obj) {

            ctx.save();
            ctx.translate(obj.x, obj.y);
            ctx.rotate(obj.a);

            ctx.strokeStyle = '#ffff00';
            ctx.beginPath();
            ctx.arc(-obj.hw, -obj.hh, 5, 0, Math.PI * 2);
            ctx.closePath();
            ctx.stroke();

            ctx.strokeStyle = '#00ff00';
            ctx.beginPath();
            ctx.arc(0, 0, 5, 0, Math.PI * 2);
            ctx.closePath();
            ctx.stroke();

            ctx.restore();

        },

        // draw an 'standard_box'
        dBX : function (obj, debug) {

            ctx.fillStyle = obj.f;
            ctx.strokeStyle = obj.s;
            ctx.lineWidth = obj.i;

            ctx.save();
            ctx.translate(obj.x, obj.y);
            ctx.rotate(obj.a);
            ctx.fillRect(-obj.hw, -obj.hh, obj.w, obj.h);
            ctx.strokeRect(-obj.hw, -obj.hh, obj.w, obj.h);
            ctx.restore();

            if (debug) {

                this.dBX_debug(obj);

            }

        },

        // draw an 'mf_standard_disp_box'
        dDr : function (obj) {

            ctx.fillStyle = obj.f;
            ctx.strokeStyle = obj.s;
            ctx.lineWidth = obj.i;

            ctx.save();
            ctx.translate(obj.x, obj.y);
            ctx.rotate(obj.a);

            var i = 2,
            l = obj.p.length;
            ctx.beginPath();
            ctx.moveTo(obj.p[0], obj.p[1]);
            while (i < l) {

                ctx.lineTo(obj.p[i], obj.p[i + 1]);

                i += 2;
            };

            if (obj.c) {

                ctx.closePath();

            }

            ctx.stroke();

            if (obj.l) {
                ctx.fill();
            }

            ctx.restore();

        }

    };

}
    ());

C.cls();
