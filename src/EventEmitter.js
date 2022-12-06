const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const eventEmitter = new MyEmitter();

module.exports = { eventEmitter };
