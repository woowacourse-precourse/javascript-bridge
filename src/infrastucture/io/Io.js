const { Console } = require('@woowacourse/mission-utils');

const Io = Object.freeze({
  input(message, callback){
    Console.readLine(message, callback);
  },
  output(message){
    Console.print(message);
  }
})

module.exports = Io;