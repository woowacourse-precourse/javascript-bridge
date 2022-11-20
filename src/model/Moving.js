const { validateNext } = require('../errorHandling');

const Moving = (function () {
  let next;

  return {
    setMoving(input) {
      this.validate(input);
      next = input;
    },

    getMoving() {
      return next;
    },

    validate(input) {
      validateNext.validate(input);
    },
  };
})();

module.exports = Moving;
