// decorators.js
function Decors(handler, decorators) {
  return decorators.reduce((decoratedHandler, decorator) => {
    return decorator(decoratedHandler);
  }, handler);
}

function Log(logger) {
  return function (handler) {
    return function (req, res) {
      logger.log(`Acessando rota ${req.method} ${req.url}`);
      return handler(req, res);
    };
  };
}
// Exporta os decorators
module.exports = { Decors, Log };
