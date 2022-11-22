const RoundProcess = require('../src/Model/RoundProcess');

const roundProcess = new RoundProcess();

const test = [
    [
        ["D", "U", "U"],
        ["D", "U"],
      ],
      [
        ["U", "U", "U", "U", "D"],
        ["U", "U", "D"],
      ],
      [
        ["D", "D", "U", "U"],
        ["D", "D", "U", "D"],
      ],
      [
        ["U", "U", "U", "U", "D", "U", "D"],
        ["U", "U", "U", "U", "D", "U", "D"],
      ],
]

const result = [
    [true, false],
    [false, false],
    [false, false],
    [true, true],
];

let index = 0;

describe('라운드 정보 생성 기능 단위 테스트', () => {
    it.each(test)(
        '마지막 라운드까지 진행했는지, 게임이 끝나고 유저가 이겼는지 여부 검사',(bridgeArray, round)=>{
            const test = () => roundProcess.checkProcess(bridgeArray, round);
            expect(test()).toStrictEqual(result[index]);
            index += 1;
        }
    );
});