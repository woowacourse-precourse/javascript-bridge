const bridgeShape = ["U", "D", "D"];
const isAnswerMovingChoice = false; // "U"
const currentBridgeCount = 3;
const movingCommand = "U";

const mapBridgeShape = bridgeShape.slice(0, currentBridgeCount);

// ["O", " ", " "]

const upside = ["O", " ", " "];
const downside = [" ", "O", "O"];
upside[currentBridgeCount - 1] = movingCommand === "U" ? "X" : " ";
downside[currentBridgeCount - 1] = movingCommand === "D" ? "X" : " ";
console.log(upside);
console.log(downside);
