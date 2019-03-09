
import * as R from 'ramda'


const rules = {
  identity: ({move}) => move,
  samePlayerCantMoveTwice: ({moves, move}) => {
      const [last, ...init] = moves.reverse()
      return move.player != last.player
  },
  inputOutOfRange: ({move}) => {
    const {x, y} = move.coord
    const [min, max] = [0, 3]
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



const validateMove = (rules, gameState) =>
  R.values(rules).map(rule => rule(gameState)).every(e=>e)

export {
  rules,
  validateMove
}
