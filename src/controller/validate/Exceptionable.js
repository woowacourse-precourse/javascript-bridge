class Exceptionable {
  #OVERIDING_ERROR_MESSAGE = '[ERROR] YOU SHOULD DECLARE "getValidation method"';

  getValidation() {
    throw new Error(this.#OVERIDING_ERROR_MESSAGE);
  }
}

module.exports = Exceptionable;
