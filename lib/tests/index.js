'use strict';

var _rules = require('../main/TicTacToe/rules');

var _TicTacToe = require('../main/TicTacToe');

var _TicTacToe2 = _interopRequireDefault(_TicTacToe);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = {
  date: Date.now()
};
var player1 = {
  name: "Franco"
};
var player2 = {
  name: "Manuel"
};
var ready = (0, _TicTacToe2.default)(game)(player1)(player2);

var move = { player: player1 };
var moves = [move];

describe('validate Rules', function () {

  it('basic identity test', function () {

    var rule = {
      test: _rules.rules.identity
    };
    var gameState = { moves: moves, move: move };
    var isMoveValid = ready(rule)(gameState);
    (0, _chai.expect)(isMoveValid).to.be.eql(true);
  }), it("same player cant move twice", function () {

    var rule = {
      test: _rules.rules.samePlayerCantMoveTwice
    };
    var gameState = { moves: moves, move: move };
    var isMoveValid = ready(rule)(gameState);
    (0, _chai.expect)(isMoveValid).to.be.eql(false);
  }), it("input out of range", function () {

    var rule = {
      test: _rules.rules.inputOutOfRange
    };
    var invalidMove = {
      coord: {
        x: -1, // should be more or equal to 0
        y: -5 // should be less or equal to 3
      }
    };
    var gameState = { moves: moves, move: invalidMove };
    var isMoveValid = ready(rule)(gameState);
    (0, _chai.expect)(isMoveValid).to.be.eql(false);
  });
});

/*

  it('sum should be a function', function () {
    expect(sum).to.be.a('function')
  })

  it('result should return a number', function () {
    expect(sum(a, b)).to.be.a('number')
  })

*/