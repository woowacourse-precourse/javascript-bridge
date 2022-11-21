const OutputView = require("../views/OutputView.js")

const moveListPush = (list, move)=>{
  list.push(move)
  return list;
}

const IndividualResultOutput = (result)=>{
  OutputView.printMap(result);
}

module.exports = {
  moveListPush,
  IndividualResultOutput,
}