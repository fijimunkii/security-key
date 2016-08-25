var u2fClient = function() { this.findOrMakeTransferElt(); this.pingPong(); };

u2fClient.prototype = pingerPonger;

u2fClient.prototype.register = function(appId, registerRequests, registeredKeys, responseHandler) {
  this.whenReady().then(function() {
    this.receive('response').then(responseHandler);
    this.send('request', {
      'type': 'register',
      'appId': appId,
      'registerRequests': registerRequests,
      'registeredKeys': registeredKeys
    });
  }.bind(this));
};

u2fClient.prototype.sign = function(appId, challenge, registeredKeys, responseHandler) {
  this.whenReady().then(function() {
    this.receive('response').then(responseHandler);
    this.send('request', {
      'type': 'sign',
      'appId': appId,
      'challenge': challenge,
      'registeredKeys': registeredKeys
    });
  }.bind(this));
};