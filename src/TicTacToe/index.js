'use strict'
import {rules}  from './rules'
import * as R from 'ramda'

const sum = (a, b) => a + b



const makeMove = (game, move) => ({
  game,
  moves: [...game.moves, move]
})

const validateMove = (rules, move) => R.values(rules).map(rule => rule(move)).every(e=>e)



const TicTacToe = rules => game => player1 => player2 => move => {
  const valid = validateMove(rules, move)
  return valid
}

export default TicTacToe
export {
  validateMove
}
