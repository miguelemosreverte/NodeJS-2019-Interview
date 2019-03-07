'use strict'

import {rules}  from '../main/TicTacToe/rules'
import TicTacToe, {
  initGame,
  validateMove,
}  from '../main/TicTacToe'




const game = {
  date: Date.now()
}
const player1 = {
  name: "Franco"
}
const player2 = {
  name: "Manuel"
}
const ready = TicTacToe(game)(player1)(player2)


const move = {player: player1}
const moves = [move]


import { expect }  from 'chai'

describe('validate Rules', () => {


  it(`basic identity test`, () => {

    const rule = {
      test: rules.identity
    }
    const gameState = {moves, move}
    const isMoveValid = ready(rule)(gameState)
    expect(isMoveValid).to.be.eql(true)
  }),
  it("same player cant move twice", () => {

    const rule = {
      test: rules.samePlayerCantMoveTwice
    }
    const gameState = {moves, move}
    const isMoveValid = ready(rule)(gameState)
    expect(isMoveValid).to.be.eql(false)
  })

})



/*

  it('sum should be a function', function () {
    expect(sum).to.be.a('function')
  })

  it('result should return a number', function () {
    expect(sum(a, b)).to.be.a('number')
  })

*/
