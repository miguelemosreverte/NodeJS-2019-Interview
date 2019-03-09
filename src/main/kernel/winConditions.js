
import * as R from 'ramda'


const winConditions = [
  R.groupBy(({coord: {x}}) => x),
  R.groupBy(({coord: {y}}) => y),
  R.groupBy(({coord: {x,y}}) => x-y)
]


const win =  ({moves, move}) => {

    const movesByPlayer = R.groupBy(R.prop('player'))(moves)
    const movesOfThisPlayer = filterWithKeys((player, value) => player == move.player, movesByPlayer)

    const givenPlayerMoves = playerMoves =>
        R.pipe(
          R.map(funtion => funtion(playerMoves)),
          /*
          [
           {"0": [{"coord": {"x": 0, "y": 0}}], "1": [{"coord": {"x": 1, "y": 0}}], "2": [{"coord": {"x": 2, "y": 2}}]},
           {"0": [{"coord": {"x": 0, "y": 0}}, {"coord": {"x": 1, "y": 0}}], "2": [{"coord": {"x": 2, "y": 2}}]},
           {"0": [{"coord": {"x": 0, "y": 0}}, {"coord": {"x": 2, "y": 2}}], "1": [{"coord": {"x": 1, "y": 0}}]}
          ]
          */
          R.map(dict =>  R.keys(dict)),
          // [["0", "1", "2"], ["0", "2"], ["0", "1"]]
          R.map(keys => keys.length == 1),
          // [true, false, false]
          R.any(a => a),
          // true

      )(winConditions)

    return givenPlayerMoves([move, ...movesOfThisPlayer])
}

export default win
export {winConditions}





const filterWithKeys = (pred, obj) => R.pipe(
  R.toPairs,
  R.filter(R.apply(pred)),
  R.fromPairs,
  R.values,
  R.flatten
)(obj);
