'use strict'

import TicTacToe, {
  initGame,
  validateMove,
}  from '../src/TicTacToe'


const rules = {
  identity: (move) => move
}

const game = {
  date: Date.now()
}
const player1 = {
  name: "Franco"
}
const player2 = {
  name: "Manuel"
}
const ready = TicTacToe(rules)(game)(player1)(player2)
const exampleMoveProposal = x => x
const isMoveValid = ready(exampleMoveProposal)



import { expect }  from 'chai'

describe('validate Rules', () => {



  it(`basic identity test`, () => {
    expect(isMoveValid).to.be.eql(true)
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
