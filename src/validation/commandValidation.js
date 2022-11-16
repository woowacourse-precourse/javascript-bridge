function commandValidation(commandInput) {
  if (commandInput !== 'Q' && commandInput !== 'R') {
    return false;
  }

  return true;
}

module.exports = commandValidation;
