const InputVaildator = require('../src/InputVaildator');
describe('Vaildator 단위 테스트', () => {
  test('입력한 길이가 유효한지 판단하는 기능', () => {
    expect(InputVaildator.isVaildLength('5')).toEqual(true);
    expect(InputVaildator.isVaildLength('35.1')).toEqual(false);
    expect(InputVaildator.isVaildLength('-1')).toEqual(false);
    expect(InputVaildator.isVaildLength('0')).toEqual(false);
  });
});
