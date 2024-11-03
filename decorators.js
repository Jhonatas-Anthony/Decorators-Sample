// decorators.js
function Decors(handler, decorators) {
  return decorators.reduce((decoratedHandler, decorator) => {
    return decorator(decoratedHandler);
  }, handler);
}

function Log(handler) {
  return function (req, res) {
    console.log(`Log: Acessando rota ${req.method} ${req.url}`);
    return handler(req, res);
  };
}
// Exporta os decorators
module.exports = { Decors, Log };
