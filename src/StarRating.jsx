import Star from './icons/Star'
import React, {Component} from 'react'
import {grey900, red500, pink500, cyan500} from './colors'


class StarRating extends Component {

  state = {
    stars: [0, 0, 0, 0, 0]
  }

  handleTouch = (index) => {
    const stars = [0, 0, 0, 0, 0]

    for (let i = 0; i <= index; i++) {
      stars[i] = 1
    }
    this.setState({stars})
  }

  render() {
    const {color, altColor, style} = this.props
    return (
      <div>
        {
          this.state.stars.map((star, i) => (
            <Star
              key={i}
              button={true}
              hoverColor={grey900}
              onClick={() => this.handleTouch(i)}
              color={star ? color : altColor}
              style={style}
            />
          ))
        }
      </div>
    )
  }
}

export default StarRating
