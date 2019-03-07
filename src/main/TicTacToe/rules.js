



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
  }
}



export {rules}
