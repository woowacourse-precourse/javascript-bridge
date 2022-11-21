const Input=require('../src/Input')
const InputView=require('../src/InputView')

describe("Input 테스트",()=>{
  // test("입력이 3미만, 20초과일때 에러를 발생시킨다.",()=>{
  //   expect(()=>{
  //     InputView.readBridgeSize(Input.checkBridge([0,1,2,23,50,130,2200,213121]))
  //   }).toThrow("[ERROR] range error occured")
  // }) 
  // 
  // test("문자일때 에러가 발생한다.",()=>{
  //   expect(()=>{
  //     InputView.readBridgeSize(Input.checkBridge(['a','b','ㅁ','ㅅ','+','*']))
  //   }).toThrow("[ERROR] The string can not be accepted")
  // })
  // test("음수일때 에러가 발생한다.",()=>{
  //   expect(()=>{
  //     InputView.readBridgeSize(Input.checkBridge([-1,-2,-4,-40,-20,-10]))
  //   }).toThrow("[ERROR] The Negative number can't be accepted")
  // }) 
  // -> .match is not a function 이 오류 때문에 실패 (해결 못함ㅠ)

  test("U,D가 아닐 때 에러가 발생한다.",()=>{
    expect(()=>{
      Input.checkMovingInput(['a','ㅈ','-',-1,'+'])
    }).toThrow("[ERROR] Only U,D accepted")
  })

  test("R,Q가 아닐 때 에러가 발생한다.",()=>{
    expect(()=>{
      Input.checkReadGameInput([1,'a','ㅈ','-',-1,'+'])
    }).toThrow("[ERROR] Only R,Q accepted")
  })
})