const { makeBridge } = require('../src/BridgeMaker')
const { generate } = require('../src/BridgeRandomNumberGenerator')

describe('다리 생성 테스트', ()=>{
  test('다리를 생성합니다.', ()=>{
    const bridges = makeBridge(10, generate)
  })
})