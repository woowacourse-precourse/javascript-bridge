const Constants = require('./Constants')

class BridgeGame {
  static move(BRIDGE, CURRENTLOCATION, moveinput) {
    if(BRIDGE[CURRENTLOCATION] == moveinput) {
      return Constants.SUCCESS
    }
    return Constants.FAIL
  }
  static retry(retryInput) {
    if(retryInput == 'R') {
      return 0
    }
  }
}

module.exports = BridgeGame;
