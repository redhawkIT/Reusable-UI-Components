import React from 'react'
import GitHub from './icons/GitHub'
import Heart from './icons/Heart'
import Star from './icons/Star'

const iocnStyle = {
  height: '50px',
  width: '50px'
}

const StarButton = () => {

  const handleTouch = () => console.log('clicked')

  return <Star button={true} hoverColor='black' onClick={handleTouch}/>
}

const App = () => (
  <div>
    <GitHub hoverColor='blue' color='red' style={iocnStyle}/>
    <Heart color='green'/>
    <StarButton/>
  </div>
)

export default App
