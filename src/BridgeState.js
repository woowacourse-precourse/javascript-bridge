const BridgeState = {
  userBridge: [],

  addBridgeFromUser(input) {
    return this.userBridge.push(input);
  },
};

module.exports = BridgeState;
