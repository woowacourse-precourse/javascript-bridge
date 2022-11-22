/* eslint-disable */

const Trimmer = require('../src/Trimmer');

describe('[Trimmer] 탬플릿 문자열을 출력하기 위해 모든 불필요한 whitespace는 제거되어야 한다.', () => {
  test.each([
    {
      rawText: `
        최종 게임 결과
        [ O |   |   ]
        [   | O | O ]

        게임 성공 여부: 성공
        총 시도한 횟수: 2
      `,
      answer:
        '최종 게임 결과\n[ O |   |   ]\n[   | O | O ]\n\n게임 성공 여부: 성공\n총 시도한 횟수: 2',
    },
  ])('', ({ rawText, answer }) => {
    const testResult = Trimmer.templateTrim(rawText);
    expect(testResult).toEqual(answer);
  });
});
