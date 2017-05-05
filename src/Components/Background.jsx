import React, { Component } from 'react';
import colors from '../data/colors.js'

class Background extends Component {
    render() {
        const Style = {
            position: 'absolute',
            width: '100%',
            height: '100vh',
            background: colors[this.props.difficulty],
            transition: '.3s ease',
        }
        return (
            <div style={Style} />
        );
    }
}

export default Background;