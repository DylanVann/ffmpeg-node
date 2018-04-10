var ffmpeg = require('./index.js');

ffmpeg.mp4(
   './test.3gp',
   function (err, out, code) {
      console.log(err, out, code);
   }
);

