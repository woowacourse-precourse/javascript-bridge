const GameUtils = require("../src/Utils/GameUtils"); 

describe("logToForm 테스트", () => {
  test("출력값 반환 테스트", () => {
    const inputs = [
      ['U', 'U', 'D', 'D'],
      ['U', 'D', 'D', 'D'],
      ['D', 'D', 'D', 'D', 'U'],
      ['D', 'D', 'D', 'D', 'LF'],
      ['U', 'U', 'D', 'UF'],
    ];

    const results = [
      [
        '[ O | O |   |   ]',
        '[   |   | O | O ]'
      ],
      [
        '[ O |   |   |   ]',
        '[   | O | O | O ]'
      ],
      [
        '[   |   |   |   | O ]',
        '[ O | O | O | O |   ]'
      ],
      [
        '[   |   |   |   |   ]',
        '[ O | O | O | O | X ]'
      ],
      [
        '[ O | O |   | X ]',
        '[   |   | O |   ]'
      ],
    ];
    
    inputs.forEach((input, idx) => {  
      const result = GameUtils.logToForm(input);
      expect(result).toEqual(results[idx]);
    });
  });
});