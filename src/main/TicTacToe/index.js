'use strict'
import {rules}  from './rules'
import winCondition  from './winConditions'
import * as R from 'ramda'


const validateMove = (rules, gameState) =>
  R.values(rules).map(rule => rule(gameState)).every(e=>e)


/**/
const TicTacToe = game => player1 => player2 => rules => gameState => {
  const valid = validateMove(rules, gameState)
  const won   = winCondition(gameState)
  return {gameState, valid, won}
}

export default TicTacToe
export {
  validateMove
}
