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
  }
};

exports.rules = rules;