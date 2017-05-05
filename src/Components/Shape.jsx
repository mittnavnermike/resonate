import React, {Component} from 'react';
import points from '../data/points';

class Shape extends Component {
  render() {
    const Style = {
      width: '50%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };
    return (
      <svg
        style={Style}
        width="582px"
        height="554px"
        viewBox="0 0 582 554"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="Group" fill="#0000FF">
            <polygon id="Star" points={points[this.props.difficulty]} />
          </g>
        </g>
      </svg>
    );
  }
}

export default Shape;
