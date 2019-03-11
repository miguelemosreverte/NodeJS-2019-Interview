
import * as R from 'ramda'




const rules = {

  samePlayerCantMoveTwice: ({moves, move}) => {
      const [last, ...init] = moves.reverse()
      return move.player != (last? last.player : undefined)
  },
  inputOutOfRange: ({move}) => {
    const {x, y} = move.coord
    const [min, max] = [-1, 1]
    const inRange = a => a >= min && a < max
    return inRange(x) && inRange(y)
  },
  cannotPlaceOnTopOfPlaced: ({moves, move}) =>
    {
      return !R.find(current_position_of_move =>
        R.equals(current_position_of_move.coord, move.coord)
      )
      (moves)
    }
}



const validateMoveWithCustomRules = rules => gameState =>
  R.pipe(
    R.toPairs,
    R.map(([name, rule]) =>
            ({[name]: rule(gameState)})

    ),
   R.mergeAll
 )(rules)



const validateMoveWithDefaultRules = gameState => validateMoveWithCustomRules(rules) (gameState)

const validateMove = rules =>  gameState =>
    R.pipe(
      R.values,
      R.all(a => a),
      R.not
    )(validateMoveWithCustomRules(rules)(gameState))

export {
  rules,
  validateMove,
  validateMoveWithDefaultRules,
  validateMoveWithCustomRules
}
