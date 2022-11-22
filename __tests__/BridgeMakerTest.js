const BridgeMaker = require("../src/BridgeMaker");

describe("다리 만들기 테스트", () => {
  describe('makeBridge', () => {
    test('주어진 size만큼 generateRandomNumber 를 수행시켜 나온 결과값을 가진 배열을 리턴한다.', () => {
      const generateRandomNumber = jest.fn()
      generateRandomNumber.mockImplementationOnce(() => 0)
      .mockImplementationOnce(() => 1)
      .mockImplementationOnce(() => 0)

      const result = BridgeMaker.makeBridge(3, generateRandomNumber)

      expect(result).toEqual(['D', 'U', 'D'])
      expect(generateRandomNumber).toHaveBeenCalledTimes(3)
    })
  })
})