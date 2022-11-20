class Exceptionable {
  #OVERIDING_ERROR_MESSAGE = '[ERROR] YOU SHOULD DECLARE "getValidation method"';

  isValidate() {
    throw new Error(this.#OVERIDING_ERROR_MESSAGE);
  }
}

module.exports = Exceptionable;
