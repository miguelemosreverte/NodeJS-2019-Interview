'use strict'
import {rules, validateMoveWithCustomRules}  from './rules'
import winCondition  from './winConditions'
import * as R from 'ramda'




const TicTacToe = game => player1 => player2 => rules => gameState =>
{
  const validators   = validateMoveWithCustomRules(rules)(gameState)
  const conditionals = winCondition(gameState)
  return {...validators, ...conditionals}
}

export default TicTacToe
