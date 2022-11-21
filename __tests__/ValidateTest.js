const Validate = require("../src/Validate");


describe('다리의 길이가 올바른지 테스트',()=>{
  test('3이상20이하의 길이 테스트',()=>{
    const answers=15;
    expect(()=>{
      Validate.bridgeSizeValidate(answers);
    }).not.toThrow();
  });
  test('Error 테스트',()=>{
    const answers='A';
    expect(()=>{
      Validate.bridgeSizeValidate(answers);
    }).toThrow();
  });
});

describe('올바른 move입력인지 테스트',()=>{
  test('U,D 테스트',()=>{
    const answers='U';
    expect(()=>{
      Validate.movingValidate(answers);
    }).not.toThrow();
  });
  test('Error 테스트',()=>{
    const answers='B';
    expect(()=>{
      Validate.movingValidate(answers);
    }).toThrow();
  });
  test('Error 테스트',()=>{
    const answers=12;
    expect(()=>{
      Validate.movingValidate(answers);
    }).toThrow();
  });
});

describe('올바른 restart입력인지 테스트',()=>{
  test('Q,R 테스트',()=>{
    const answers='Q';
    expect(()=>{
      Validate.restartValidate(answers);
    }).not.toThrow();
  });
  test('Error 테스트',()=>{
    const answers='A';
    expect(()=>{
      Validate.restartValidate(answers);
    }).toThrow();
  });
  test('Error 테스트',()=>{
    const answers=15;
    expect(()=>{
      Validate.restartValidate(answers);
    }).toThrow();
  });
});


