var Mink = require('cucumber-mink');

// Phantomjs - GhostDriver
var parameters = {
  driver: {
    desiredCapabilities: {
      browserName: 'chrome'
    },
    logLevel: 'silent', 
  }
};

module.exports = function () {
  Mink.init(this, parameters);
};
