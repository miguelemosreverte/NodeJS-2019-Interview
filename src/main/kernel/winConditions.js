
import * as R from 'ramda'


const winConditions = {
      groupedByX  : R.groupBy(({move: {coord: {x}}}) => x)
    , groupedByY  : R.groupBy(({move: {coord: {y}}}) => y)
    , groupedByXY : R.groupBy(({move: {coord: {x,y}}}) => x-y)
  }

export default winConditions
