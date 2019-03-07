"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var rules = {
  identity: function identity(_ref) {
    var move = _ref.move;
    return move;
  },
  samePlayerCantMoveTwice: function samePlayerCantMoveTwice(_ref2) {
    var moves = _ref2.moves,
        move = _ref2.move;

    var _moves$reverse = moves.reverse(),
        _moves$reverse2 = _toArray(_moves$reverse),
        last = _moves$reverse2[0],
        init = _moves$reverse2.slice(1);

    return move.player != last.player;
  },
  inputOutOfRange: function inputOutOfRange(_ref3) {
    var move = _ref3.move;
    var _move$coord = move.coord,
        x = _move$coord.x,
        y = _move$coord.y;
    var min = 0,
        max = 3;

    var inRange = function inRange(a) {
      return a >= min && a < max;
    };
    return inRange(x) && inRange(y);
  }
};

exports.rules = rules;