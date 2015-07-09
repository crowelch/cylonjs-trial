var Cylon = require('cylon');

var port = '/dev/cu.usbmodem1411';

// define the robot
var robot = Cylon.robot({
  // change the port to the correct one for your Arduino
  connections: {
    arduino: { adaptor: 'firmata', port: port }
  },

  devices: {
    led: { driver: 'led', pin: 13 }
  },

  work: function(my) {
    every((0.5).second(), my.led.toggle);
  }
});

// connect to the Arduino and start working
robot.start();
