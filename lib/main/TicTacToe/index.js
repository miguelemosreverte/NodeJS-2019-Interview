'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateMove = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _rules = require('./rules');

var _ramda = require('ramda');

var R = _interopRequireWildcard(_ramda);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sum = function sum(a, b) {
  return a + b;
};

var makeMove = function makeMove(game, move) {
  return {
    game: game,
    moves: [].concat((0, _toConsumableArray3.default)(game.moves), [move])
  };
};

var validateMove = function validateMove(rules, gameState) {
  return R.values(rules).map(function (rule) {
    return rule(gameState);
  }).every(function (e) {
    return e;
  });
};

var TicTacToe = function TicTacToe(game) {
  return function (player1) {
    return function (player2) {
      return function (rules) {
        return function (gameState) {
          var valid = validateMove(rules, gameState);
          return valid;
        };
      };
    };
  };
};

exports.default = TicTacToe;
exports.validateMove = validateMove;