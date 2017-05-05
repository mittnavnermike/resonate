import React, { Component } from 'react';
import speakers from '../data/results';

class Test extends Component {
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
                            height: `${height}vh`,
                        }}
                    >
                        <div
                            style={{
                                background: this.props.background,
                                opacity: 1 / speaker.results[this.state.fase].difficulty,
                                width: `${100 / 4}%`,
                                transition: '.5s linear',
                                color: 'white',
                            }}
                        >
                            {/*{this.state.fase + 1} <br />*/}
                            {speaker.speaker} <br />
                            {/*<span
                                style={{fontSize: '50px', textAlign: 'center'}}
                            >
                                {speaker.results[this.state.fase].emoji}
                            </span>*/}
                        </div>
                        <div
                            style={{
                                background: this.props.background,
                                opacity: 1 / speaker.results[this.state.fase].interest,
                                width: `${100 / 4}%`,
                                transition: '.5s linear',
                            }}
                        />
                        <div
                            style={{
                                background: this.props.background,
                                opacity: 1 / speaker.results[this.state.fase].inspiring,
                                width: `${100 / 4}%`,
                                transition: '.5s linear',
                            }}
                        />
                        <div
                            style={{
                                background: this.props.background,
                                opacity: 1 / speaker.results[this.state.fase].abstract,
                                width: `${100 / 4}%`,
                                transition: '.5s linear',
                            }}
                        />
                    </div>
                )}
            </div>
        )
    }
}

export default Test;