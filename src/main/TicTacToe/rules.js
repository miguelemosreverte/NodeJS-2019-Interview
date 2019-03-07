



const rules = {
  identity: ({move}) => move,
  samePlayerCantMoveTwice: ({moves, move}) => {
      const [last, ...init] = moves.reverse()
      return move.player != last.player
  }
}



export {rules}
