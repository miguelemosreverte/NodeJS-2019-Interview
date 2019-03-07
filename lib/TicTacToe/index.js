'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateMove = undefined;

var _rules = require('./rules');

var _ramda = require('ramda');

var R = _interopRequireWildcard(_ramda);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var sum = function sum(a, b) {
  return a + b;
};

var makeMove = function makeMove(game, move) {
  return {
    game: game,
    moves: [].concat(_toConsumableArray(game.moves), [move])
  };
};

var validateMove = function validateMove(rules, move) {
  return R.values(rules).map(function (rule) {
    return rule(move);
  }).every(function (e) {
    return e;
  });
};

var TicTacToe = function TicTacToe(rules) {
  return function (game) {
    return function (player1) {
      return function (player2) {
        return function (move) {
          var valid = validateMove(rules, move);
          return valid;
        };
      };
    };
  };
};

exports.default = TicTacToe;
exports.validateMove = validateMove;