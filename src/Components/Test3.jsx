import React, { Component } from 'react';
import speakers from '../data/results';

class Test3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fase: 0,
        }
    };
    componentDidMount() {
        setInterval(() => {
            this.setState({
                fase: this.state.fase < speakers[0].results.length ? this.state.fase + 1 : 0,
            })
        }, 100)
    };
    render() {
        const height = '200px';
        const style = {
            fontFamily: 'Stanley-Poster',
            width: `${100 / 4}%`,
            fontSize: `100px`,
            lineHeight: height,
            transition: '.5s linear',
            textAlign: 'center',
            borderRight: '2px solid black',
            //background: 'black',
            //color: 'white',
        }
        return (
            <div>
                {speakers.map((speaker, key) =>
                    <div
                        key={key}
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            height,
                            borderBottom: '2px solid black',
                            TextStroke: '1px black',
                            color: 'transparent',
                            '-webkit-text-stroke': '2px black',
                        }}
                    >
                        {/*{speaker.speaker}*/}
                        <div
                            style={style}
                        >
                        {speaker.results[this.state.fase].difficulty}
                        </div>
                        <div
                            style={style}
                        >
                        {speaker.results[this.state.fase].interest}
                        </div>
                        <div
                            style={style}
                        >
                        {speaker.results[this.state.fase].inspiring}
                        </div>
                        <div
                            style={style}
                        >
                        {speaker.results[this.state.fase].abstract}
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Test3;