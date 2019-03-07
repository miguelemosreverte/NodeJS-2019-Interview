'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rules = undefined;

var _ramda = require('ramda');

var R = _interopRequireWildcard(_ramda);

var _winConditions = require('./winConditions');

var _winConditions2 = _interopRequireDefault(_winConditions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
  },
  win: function win(_ref4) {
    var moves = _ref4.moves,
        move = _ref4.move;


    var movesByPlayer = R.groupBy(R.prop('player'))(moves);
    var movesOfThisPlayer = filterWithKeys(function (player, value) {
      return player == move.player;
    }, movesByPlayer);

    var givenPlayerMoves = function givenPlayerMoves(playerMoves) {
      return R.map(function (grouped) {
        var keys = Object.keys(grouped(playerMoves));
        var values = R.values(grouped(playerMoves));
        var result = keys.length == 1;
        //console.log("grouped %o ", grouped(playerMoves), result)
        return result;
      })(_winConditions2.default);
    };

    var result = R.values(givenPlayerMoves([move].concat(_toConsumableArray(movesOfThisPlayer)))).some(function (a) {
      return a;
    });
    //const result = givenPlayerMoves([move, ...movesOfThisPlayer])
    //console.log("BACK TO THE DRAWING BOARD ", result)
    return result;
  },
  cannotPlaceOnTopOfPlaced: function cannotPlaceOnTopOfPlaced(_ref5) {
    var moves = _ref5.moves,
        move = _ref5.move;
    return !R.find(function (current_position_of_move) {
      return R.equals(current_position_of_move.coord, move.coord);
    })(moves);
  }
};

exports.rules = rules;


var filterWithKeys = function filterWithKeys(pred, obj) {
  return R.pipe(R.toPairs, R.filter(R.apply(pred)), R.fromPairs, R.values, R.flatten)(obj);
};