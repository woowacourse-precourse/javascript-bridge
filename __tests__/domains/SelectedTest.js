/* eslint no-use-before-define: 0 */
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
/* eslint max-lines-per-function: "off" */

const Selected = require('../../src/Model/Selected');

describe('Selected 도메인 로직 테스트', () => {
  test('값의 입력에 따른 level 값 확인', () => {
    const selected = new Selected();
    const inputArray = ['U', 'D', 'D'];

    inputArray.forEach((input) => selected.addElement(input));

    expect(selected.level).toBe(inputArray.length);
  });
});
