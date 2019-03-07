
import * as R from 'ramda'


const winConditions = {
      groupedByX  : R.groupBy(({coord: {x}}) => x)
    , groupedByY  : R.groupBy(({coord: {y}}) => y)
    , groupedByXY : R.groupBy(({coord: {x,y}}) => x-y)
  }


const win =  ({moves, move}) => {

    const movesByPlayer = R.groupBy(R.prop('player'))(moves)
    const movesOfThisPlayer = filterWithKeys((player, value) => player == move.player, movesByPlayer)

    const givenPlayerMoves = playerMoves =>
       R.map( group =>
           R.keys(group(playerMoves)).length == 1
           // if all can be grouped in one group then they are the same!
       )(winConditions)

    return R.values(givenPlayerMoves([move, ...movesOfThisPlayer])).some(a => a)
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
