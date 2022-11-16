function movingValidation(movingInput) {
  if (movingInput !== 'U' && movingInput !== 'D') {
    return false;
  }

  return true;
}

module.exports = movingValidation;
