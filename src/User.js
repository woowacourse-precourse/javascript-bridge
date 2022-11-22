const { BRIDGE_GAME_OPTION, BRIDGE_FORM} = require('./Constant/Constant');
class User {
  constructor() {
    this.userStatus = [[],[]];
    this.userCount = 0;
  }

  whetherHasCan(input, bridge) {
    if (input === bridge[this.userCount]) {
      return true;
    }
    if (input !== bridge[this.userCount]) {
      return false;
    }
  }

  canGo(input) {
    if (input === BRIDGE_GAME_OPTION.UP) {
      this.userStatus[BRIDGE_FORM.UP_POSITION].push(BRIDGE_FORM.HIT);
      this.userStatus[BRIDGE_FORM.DOWN_POSITION].push(BRIDGE_FORM.BLOCK);
    }
    if (input === BRIDGE_GAME_OPTION.DWON) {
      this.userStatus[BRIDGE_FORM.UP_POSITION].push(BRIDGE_FORM.BLOCK);
      this.userStatus[BRIDGE_FORM.DOWN_POSITION].push(BRIDGE_FORM.HIT);
    }
  }

  willGo(input) {
    this.userCount += 1;
    this.canGo(input);
    return this.userStatus;
  }

  canNotGo(input) {
    if (input === BRIDGE_GAME_OPTION.UP) {
      this.userStatus[BRIDGE_FORM.UP_POSITION].push(BRIDGE_FORM.MISS);
      this.userStatus[BRIDGE_FORM.DOWN_POSITION].push(BRIDGE_FORM.BLOCK);
    }
    if (input === BRIDGE_GAME_OPTION.DWON) {
      this.userStatus[BRIDGE_FORM.UP_POSITION].push(BRIDGE_FORM.BLOCK);
      this.userStatus[BRIDGE_FORM.DOWN_POSITION].push(BRIDGE_FORM.MISS);
    }
  }

  willNotGo(input) {
    this.canNotGo(input);
    return this.userStatus;
  }

  returnPosition() {
    this.userStatus.map((status) => {
      status.pop();
    });

    return this.userStatus;
  }
}

module.exports = User;