
import * as R from 'ramda'
import winConditions from './winConditions'


const rules = {
  identity: ({move}) => move,
  samePlayerCantMoveTwice: ({moves, move}) => {
      const [last, ...init] = moves.reverse()
      return move.player != last.player
  },
  inputOutOfRange: ({move}) => {
    const {coord: {x, y}} = move
    const [min, max] = [0, 3]
    const inRange = a => a >= min && a < max
    return inRange(x) && inRange(y)
  },
  win: ({moves, move}) => {

    const movesByPlayer = R.groupBy(R.prop('player'))(moves)
    const movesOfThisPlayer = filterWithKeys((player, value) => player == move.player, movesByPlayer)

    const givenPlayerMoves = playerMoves =>
       R.map( grouped => {
         const keys = Object.keys(grouped(playerMoves))
         const values = R.values(grouped(playerMoves))
         const result = keys.length == 1
         //console.log("grouped %o ", grouped(playerMoves), result)
         return result
       })(winConditions)

    const result = R.values(givenPlayerMoves([move, ...movesOfThisPlayer])).some(a => a)
    //const result = givenPlayerMoves([move, ...movesOfThisPlayer])
    //console.log("BACK TO THE DRAWING BOARD ", result)
    return result
  },
  cannotPlaceOnTopOfPlaced: a => a
}



export {rules}






const filterWithKeys = (pred, obj) => R.pipe(
  R.toPairs,
  R.filter(R.apply(pred)),
  R.fromPairs,
  R.values,
  R.flatten
)(obj);
