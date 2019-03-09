'use strict'
import {rules, validateMove}  from './rules'
import * as R from 'ramda'

const sum = (a, b) => a + b



const makeMove = (game, move) => ({
  game,
  moves: [...game.moves, move]
})




const TicTacToe = game => player1 => player2 => rules => gameState => {
  const valid = validateMove(rules, gameState)
  return valid
}

export default TicTacToe
export {
  validateMove
}
