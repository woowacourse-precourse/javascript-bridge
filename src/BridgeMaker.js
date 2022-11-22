/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return Array.from({ length: size }, () => {
      const randomNum = generateRandomNumber();
      if (randomNum === 0) return "D";
      return "U";
    });
  },
};

module.exports = BridgeMaker;
