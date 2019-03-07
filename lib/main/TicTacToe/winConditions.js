'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

var _ramda = require('ramda');

var R = _interopRequireWildcard(_ramda);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var winConditions = {
      groupedByX: R.groupBy(function (_ref) {
            var x = _ref.move.coord.x;
            return x;
      }),
      groupedByY: R.groupBy(function (_ref2) {
            var y = _ref2.move.coord.y;
            return y;
      }),
      groupedByXY: R.groupBy(function (_ref3) {
            var _ref3$move$coord = _ref3.move.coord,
                x = _ref3$move$coord.x,
                y = _ref3$move$coord.y;
            return x - y;
      })
};

exports.default = winConditions;