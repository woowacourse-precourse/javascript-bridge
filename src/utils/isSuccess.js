function isSuccess(status) {
  if (status === true) {
    return '성공';
  }
  return '실패';
}

module.exports = isSuccess;
