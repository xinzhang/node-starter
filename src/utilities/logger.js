const winston = require('winston');

let options = {};

if (process.env.NODE_ENV === 'development') {
  options = {
    format: winston.format.simple(),
  };
}

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console(options)],
});

module.exports = logger;
