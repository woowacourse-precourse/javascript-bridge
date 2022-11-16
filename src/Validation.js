const Validate = {
  sizeInputRange(input) {
    const USER_NUMBER = Number(input);
    if (USER_NUMBER < 3 || USER_NUMBER > 20) {
      throw new Error();
    }
  },

  sizeInputForm(input) {
    if (isNaN(input)) {
      throw new Error();
    }
  },
};

module.exports = Validate;
