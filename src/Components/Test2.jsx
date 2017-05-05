
import React, { Component } from 'react';
import speakers from '../data/results';

class Test2 extends Component {
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
        }, 500)
    };
    render() {
        const height = 100 / speakers.length;
        return (
            <div>
                {speakers.map((speaker, key) =>
                    <div
                        key={key}
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            height: `${height}vh`,
                        }}
                    >
                        {speaker.speaker}
                        <div
                            style={{
                                background: `rgba(0,0,0,${1 / speaker.results[this.state.fase].difficulty}`,
                                background: 'black',
                                width: `${100 / 4}%`,
                                height: `${height / speaker.results[this.state.fase].difficulty}vh`,
                                transition: '.5s linear',
                            }}
                        />
                        <div
                            style={{
                                background: `rgba(0,0,0,${1 / speaker.results[this.state.fase].interest}`,
                                background: 'black',
                                width: `${100 / 4}%`,
                                height: `${height / speaker.results[this.state.fase].interest}vh`,
                                transition: '.5s linear',
                            }}
                        />
                        <div
                            style={{
                                background: `rgba(0,0,0,${1 / speaker.results[this.state.fase].inspiring}`,
                                background: 'black',
                                width: `${100 / 4}%`,
                                height: `${height / speaker.results[this.state.fase].inspiring}vh`,
                                transition: '.5s linear',
                            }}
                        />
                        <div
                            style={{
                                background: `rgba(0,0,0,${1 / speaker.results[this.state.fase].abstract}`,
                                background: 'black',
                                width: `${100 / 4}%`,
                                height: `${height / speaker.results[this.state.fase].abstract}vh`,
                                transition: '.5s linear',
                            }}
                        />
                    </div>
                )}
            </div>
        )
    }
}

export default Test2;