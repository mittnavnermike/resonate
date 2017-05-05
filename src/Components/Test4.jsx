import React, { Component } from 'react';
import speakers from '../data/results';

class Test4 extends Component {
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
        }, 300)
    };
    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'times',
                    background: 'black',
                    color: 'white',
                    '-webkit-font-smoothing': 'antialiased',
                    paddingBottom: '100px',
                    marginBottom: 0,
                }}
            >
                {speakers.map((speaker, key) =>
                    <h1
                        style={{
                            textAlign: 'center',
                            margin: 0,
                            fontSize: `${100 / speakers.length}vh`,
                            lineHeight: `${(speaker.results[2].interest + speaker.results[2].interest)}`,
                            transform: `scaleY(${
                                (speaker.results[2].inspiring + speaker.results[2].interest)
                            })`,
                            //filter: `blur(${speaker.results[0].interest}px)`,
                            transition: '.3s linear',
                            padding: '20px',
                        }}
                    >
                        {speaker.speaker}{speaker.results[2].emoji}
                    </h1>
                )}
            </div>
        );
    }
}

export default Test4;