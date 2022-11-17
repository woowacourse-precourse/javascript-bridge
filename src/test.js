const bridgeShape = ["U", "D", "D"];
const isAnswerMovingChoice = false;
const currentBridgeCount = 3;

const mapBridgeShape = bridgeShape.slice(0, currentBridgeCount);

// ["O", " ", " "]

const upside = ["O", " ", " "];
const downside = [" ", "O", "O"];
upside[currentBridgeCount - 1] = "X";
downside[currentBridgeCount - 1] = " ";
console.log(upside);
console.log(downside);
