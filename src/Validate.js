const Validate = {
  size(size) {
    const number = /^(0|[-]?[1-9]\d*)$/.test(size) || typeof size === 'number';
    const length = size <= 20 && size >= 3;

    if (!length || !number) {
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
  },
};

module.exports = Validate;
