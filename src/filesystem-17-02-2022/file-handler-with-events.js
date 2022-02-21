const EventEmitter = require('events');

class SolutionHandler extends EventEmitter{ }
const solutionHandler = new SolutionHandler();

module.exports = solutionHandler;
