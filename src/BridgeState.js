const BridgeState = {
  userBridge: [],
  numberOfAttempts: 1,

  addBridgeFromUser(input) {
    return this.userBridge.push(input);
  },

  resetBridge() {
    return (this.userBridge = []);
  },

  addAttempts() {
    return (this.numberOfAttempts += 1);
  },
};

module.exports = BridgeState;
