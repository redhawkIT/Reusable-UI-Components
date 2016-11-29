import React from 'react'
import GitHub from './icons/GitHub'
import Heart from './icons/Heart'
import Star from './icons/Star'
import StarRating from './StarRating'
import {grey900, red500, pink500, cyan500} from './colors'

const iocnStyle = {
  height: '50px',
  width: '50px'
}

const App = () => (
  <div>
    <GitHub hoverColor={red500} color={cyan500} style={iocnStyle}/>
    <Heart color={pink500} style={iocnStyle}/>
    <Star style={iocnStyle}/>
    <StarRating color={red500} altColor={cyan500} style={iocnStyle}/>
  </div>
)

export default App
