const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant/message.js");

const Printer = {
    start() {
        Console.print(MESSAGE.START);
    },

    spaceLine() {
        Console.print("");
    },
};

module.export = Printer;
