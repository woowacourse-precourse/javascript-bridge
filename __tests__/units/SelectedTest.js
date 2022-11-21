/* eslint no-use-before-define: 0 */
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
/* eslint max-lines-per-function: "off" */

const Selected = require('../../src/Model/Selected');

describe('Selected unit 테스트', () => {
  let selected;
  beforeEach(() => {
    selected = new Selected();
  });
  test('length getter 테스트: 생성 직후 length는 0, addElement한 수와 level 수가 일치', () => {
    const inputArray = ['U', 'D', 'D'];

    expect(selected.level).toBe(0);
    inputArray.forEach((input) => selected.addElement(input));

    expect(selected.level).toBe(inputArray.length);
  });
  test('addElement 메소드 테스트: addElement한 만큼 level의 증가 여부 확인', () => {
    const inputArray = ['U', 'D', 'D', 'U'];
    inputArray.forEach((input) => selected.addElement(input));

    expect(selected.level).toBe(inputArray.length);
  });
  test('getElement 메소드 테스트: selected의 입력한 대로, getElement를 통해 출력 가능 여부 확인', () => {
    const inputArray = ['U', 'D', 'D'];

    inputArray.forEach((input) => selected.addElement(input));

    inputArray.forEach((_, index) => {
      expect(selected.getElement(index)).toBe(inputArray[index]);
    });
  });

  test('reset 메소드 테스트: reset 이후 level값 0인지 여부 확인', () => {
    const inputArray = ['U', 'D', 'D'];

    inputArray.forEach((input) => selected.addElement(input));
    selected.reset();

    expect(selected.level).toBe(0);
  });
});
