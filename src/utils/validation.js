class Validation {
  isValidLength(input) {
    if (!(input >= 3 && input <= 20))
      throw "[ERROR] 다리 길이는 3 이상 20 이하만 가능";
  }
}

module.exports = Validation;
