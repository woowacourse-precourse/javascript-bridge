const BridgeMaker = require('../src/BridgeMaker');
const { SPAWNABLE_TILES } = require('../src/constants');

describe('BridgeMaker 테스트', () => {
  test('generateRandomNumber 함수에 따라 Bridge를 잘 생성하는지', () => {
    const randomNumbers = [1, 0, 0, 1, 1, 0];
    const size = randomNumbers.length;
    const tiles = randomNumbers.map((index) => SPAWNABLE_TILES[index]);
    const generateRandomNumber = () => randomNumbers.shift();

    expect(BridgeMaker.makeBridge(size, generateRandomNumber)).toEqual(tiles);
  });
});
