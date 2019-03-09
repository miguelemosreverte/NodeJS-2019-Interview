'use strict'
import {rules, validateMove}  from './rules'
import winCondition  from './winConditions'
import * as R from 'ramda'




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
