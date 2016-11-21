import React from 'react'
import GitHub from './icons/GitHub'
import Heart from './icons/Heart'
import Star from './icons/Star'
import {grey900, red500, pink500, cyan500} from './colors'

const iocnStyle = {
  height: '50px',
  width: '50px'
}

const StarButton = (props) => {

  const handleTouch = () => console.log('clicked')

  return <Star {...props} button={true} hoverColor={grey900} onClick={handleTouch}/>
}

const App = () => (
  <div>
    <GitHub hoverColor={red500} color={cyan500} style={iocnStyle}/>
    <Heart color={pink500} style={iocnStyle}/>
    <StarButton style={iocnStyle}/>
  </div>
)

export default App
