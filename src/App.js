const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');
const UserInput = require('./UserInput');
const BridgeUnit = require('./BridgeUnit');

class App {
  play() {
    let size = 5;
    let generateRandomNumber = BridgeRandomNumberGenerator.generate;
    const bridgeBits = BridgeMaker.makeBridge(size, generateRandomNumber);
    console.log(bridgeBits)

    const bridge = bridgeBits.map(x => new BridgeUnit(x));

    const userInputArr = ['U', 'D', 'D'];
    const userInputs = userInputArr.map(x => new UserInput(x));
    userInputs.forEach((x, i) => x.setStep(i + 1));
    console.log(userInputs)

    for (let i = 0; i < userInputs.length; i++) {
      if (userInputs[i].value === bridge[i].value) {
        bridge[i].setMark('O');
      }
      if (userInputs[i].value !== bridge[i].value) {
        bridge[i].setMark('X');
      }
      if (userInputs[i].value === 'U') {
        bridge[i].setMarkIndex(0);
      }
      if (userInputs[i].value === 'D') {
        bridge[i].setMarkIndex(1);
      }
    }

    bridge.forEach(bridgeUnit => bridgeUnit.setElement());

    console.log(bridge);

    console.log(`${bridge[0].element[0]}\n${bridge[0].element[1]}`)
    console.log(`${bridge[0].element[0]}${bridge[1].element[0]}\n${bridge[0].element[1]}${bridge[1].element[1]}`)
    console.log(`${bridge[0].element[0]}${bridge[1].element[0]}\n${bridge[0].element[1]}${bridge[1].element[1]}`.replaceAll('][', '|'))

    let upMarks = [];
    let downMarks = [];
    for (let i = 0; i < userInputs; i++) {
      upMarks.push(bridge[i].element[0]);
      downMarks.push(bridge[i].element[1]);
    }

    let up = upMarks.join('');
    let down = downMarks.join('');

    console.log(up.replaceAll('][', '|'))
    console.log(down.replaceAll('][', '|'))

    OutputView.end();
  }
}

new App().play();

module.exports = App;
