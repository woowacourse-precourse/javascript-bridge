/* eslint no-use-before-define: 0 */
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
/* eslint max-lines-per-function: "off" */

const TryCnt = require('../../src/Model/TryCnt');

describe('TryCnt Model unit test', () => {
  let tryCnt;

  beforeEach(() => {
    tryCnt = new TryCnt();
  });
  test('cnt getter test', () => {
    expect(tryCnt.cnt).toBe(1);
  });
  test('add method test', () => {
    const { cnt } = tryCnt;

    tryCnt.add();
    tryCnt.add();
    tryCnt.add();

    expect(tryCnt.cnt).toBe(cnt + 3);
  });
  test('reset method test', () => {
    tryCnt.add();
    tryCnt.add();
    tryCnt.add();
    tryCnt.reset();

    expect(tryCnt.cnt).toBe(1);
  });
});
