const InputView=require('../src/InputView');

describe("InputView 테스트",()=>{
  test("입력이 3미만, 20초과일때 에러를 발생시킨다.",()=>{
    expect(()=>{
      new InputView.readBridgeSize([0,1,2,23,50,130,2200,213121])
    }).toThrow("[ERROR] range error occured")
  })
  test("문자일때 에러가 발생한다.",()=>{
    expect(()=>{
      new InputView.readBridgeSize(['a','b','ㅁ','ㅅ','+','*'])
    }).toThrow("[ERROR] The string can not be accepted")
  })
  test("음수일때 에러가 발생한다.",()=>{
    expect(()=>{
      new InputView.readBridgeSize([-1,-2,-4,-40,-20,-10])
    }).toThrow("[ERROR] The Negative number can't be accepted")
  })
})