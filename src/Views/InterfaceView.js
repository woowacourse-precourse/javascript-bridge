const { ERROR } = require('../Constants');

class InterfaceView {
  constructor() {
    if (this.constructor === InterfaceView) {
      throw new Error(ERROR.INTERFACE.INSTANCE);
    }
  }

  readLine(query, callback) {
    throw new Error(ERROR.INTERFACE.METHOD);
  }

  print(message) {
    throw new Error(ERROR.INTERFACE.METHOD);
  }

  close() {
    throw new Error(ERROR.INTERFACE.METHOD);
  }
}

module.exports = InterfaceView;
