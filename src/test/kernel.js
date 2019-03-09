'use strict'

import {rules}  from '../main/kernel/rules'
import winCondition  from '../main/kernel/winConditions'
import TicTacToe, {
  initGame,
  validateMove,
}  from '../main/kernel'




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


const move = {
    player: player1,
    coord: {
      x: 0, // should be more or equal to 0
      y: 0  // should be less or equal to 3
}}

const moves = [move]


import { expect }  from 'chai'

describe('validate Rules', () => {


  it(`basic identity test`, () => {

    const rule = {
      test: rules.identity
    }
    const gameState = {moves, move}
    const newGameState = ready(rule)(gameState)
    expect(newGameState.valid).to.be.eql(true)
  }),
  it("same player cant move twice", () => {

    const rule = {
      test: rules.samePlayerCantMoveTwice
    }
    const gameState = {moves, move}
    const newGameState = ready(rule)(gameState)
    expect(newGameState.valid).to.be.eql(false)
  }),
  it("input out of range", () => {

    const rule = {
      test: rules.inputOutOfRange
    }

    const invalidMove = {player:player1, coord:{x:-1, y:5}}
    const gameState = {moves, move: invalidMove}
    const newGameState = ready(rule)(gameState)
    expect(newGameState.valid).to.be.eql(false)
  }),
  it("cannot place on top of placed ", () => {

    const rule = {
      test: rules.cannotPlaceOnTopOfPlaced
    }
    const move = {player:player1, coord:{x:1, y:1}}
    const moves = [
     move
    ]
    const gameState = {moves, move}
    const newGameState = ready(rule)(gameState)
    expect(newGameState.valid).to.be.eql(false)
  })
})


describe('win Conditions', () => {
  it("Ywin", () => {

    const moves = [
     {player:player1, coord:{x:0, y:0}},
     {player:player1, coord:{x:1, y:0}}
    ]
    const finalMove = {player:player1, coord:{x:2, y:0}}
    const gameState = {moves, move: finalMove}
    const newGameState = ready(rules)(gameState)
    expect(newGameState.won).to.be.eql(true)
  }),
  it("Xwin", () => {

    const moves = [
     {player:player1, coord:{x:0, y:0}},
     {player:player1, coord:{x:0, y:1}}
    ]
    const finalMove = {player:player1, coord:{x:0, y:2}}
    const gameState = {moves, move: finalMove}
    const newGameState = ready(rules)(gameState)
    expect(newGameState.won).to.be.eql(true)
  }),
  it("diagonal Win", () => {

    const moves = [
     {player:player1, coord:{x:0, y:0}},
     {player:player1, coord:{x:1, y:1}}
    ]
    const finalMove = {player:player1, coord:{x:2, y:2}}
    const gameState = {moves, move: finalMove}
    const newGameState = ready(rules)(gameState)
    expect(newGameState.won).to.be.eql(true)
  }),
  it("contra diagonal Win", () => {

    const moves = [
     {player:player1, coord:{x:1, y:1}},
     {player:player1, coord:{x:0, y:0}}
    ]
    const finalMove = {player:player1, coord:{x:-1, y:-1}}
    const gameState = {moves, move: finalMove}
    const newGameState = ready(rules)(gameState)
    expect(newGameState.won).to.be.eql(true)
  }),
  it("no Win :( ", () => {

    const moves = [
     {player:player1, coord:{x:-1, y:1}},
     {player:player1, coord:{x:0, y:0}}
    ]
    const finalMove = {player:player1, coord:{x:1, y:-1}}
    const gameState = {moves, move: finalMove}
    const newGameState = ready(rules)(gameState)
    expect(newGameState.won).to.be.eql(false)
  })


})
