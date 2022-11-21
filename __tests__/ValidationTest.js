const {validateBridgeLength, validationMove} = require("../src/Validation");

describe("validation 다리 길이 입력 test", () => {
    test("validation length function test", () => {
        // (1) 범위 내의 숫자 입력 true
        // (2) 범위 외의 숫자 입력 true
        // (3) 문자열 입력 false
       const input = [10,40,'a'];
       const output = [true,false,false];

       for(let i = 0 ; i < input.length ; i++){
           expect(validateBridgeLength(input[i])).toEqual(output[i]);
       }
    });
});


describe("validation user 이동 입력 test", () => {
    test("validation move function test", () => {
        // (1) U 입력 true
        // (2) D 입력 true
        // (3) 숫자 입력 false
        const input = ['U', 'D', 3];
        const output = [true,true,false];

        for(let i = 0 ; i < input.length ; i++){
            expect(validationMove(input[i])).toEqual(output[i]);
        }
    });
});
