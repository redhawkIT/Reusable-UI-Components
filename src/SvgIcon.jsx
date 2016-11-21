import React, {Component, PropTypes} from 'react'

class SvgIcon extends Component {
  state = {
    hovered: false
  }

  handleMouseLeave = (event) => {
    this.setState({hovered: false})
    this.props.onMouseLeave(event)
  }

  handleMouseEnter = (event) => {
    this.setState({hovered: true})
    this.props.onMouseEnter(event)
  }

  render() {
    const {
      children,
      color,
      hoverColor,
      onMouseEnter,
      onMouseLeave,
      style,
      viewBox,
      button,
      ...other
    } = this.props

    const offColor = color ? color : 'currentColor'
    const onColor = hoverColor ? hoverColor : offColor

    const rootStyle = {
      display: 'inline-block',
      color: '#757575',
      height: 24,
      width: 24,
      fill: this.state.hovered ? onColor : offColor,
      cursor: button ? 'pointer' : 'default',
      ...style
    }

    return (
      <svg
        {...other}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        viewBox={viewBox}
        style={rootStyle}
      >
        {children}
      </svg>
    )
  }
}

SvgIcon.propTypes = {
  children: PropTypes.node,
  viewBox: PropTypes.string
}

SvgIcon.defaultProps = {
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  viewBox: '0 0 24 24'
}

export default SvgIcon
