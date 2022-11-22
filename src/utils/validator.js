class Validator {
  isValidLength(input) {
    if (!(input >= 3 && input <= 20))
      throw "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.";
  }
}

module.exports = Validation;