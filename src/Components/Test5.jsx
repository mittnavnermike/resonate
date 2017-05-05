import React, { Component } from 'react';
import { Radar, Line, Polar } from 'react-chartjs-2';
import autoBind from 'react-autobind';
import speakers from '../data/results';

class Test5 extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            data: [2,2,3,4],
        }
    }
    componentDidMount() {
        setInterval(()=>{
            this.setState({
                data: [
                    Math.floor(Math.random() * 5),
                    Math.floor(Math.random() * 5),
                    Math.floor(Math.random() * 5),
                    Math.floor(Math.random() * 5)
                ],
            });
        }, 500);
    }
    render() {
        const options = {
            maintainAspectRatio: false,
            scale: {
                display: false,
                gridLines: {
                    display: false,
            },
            ticks: {
                beginAtZero: true,
                },
            },
            legend: {
                display: false,
            },
            tooltip: {
                display: false,
            },
        };
        const data = {
            labels: ['difficulty', 'interest', 'inspiring', 'abstract'],
            datasets: [
                {
                    data: this.state.data,
                    backgroundColor: 'rgba(255,255,0,1)',
                    pointRadius: 0,
                    borderColor: 'rgba(255,255,255,0)',
                    lineTension: 0.3,
                },
                {
                    data: [5,2,1,2],
                    backgroundColor: 'rgba(255,0,0,0)',
                    pointRadius: 0,
                    borderColor: 'rgba(255,255,255,0)',
                },
            ],
        };
        return (
            <div>
                <ul className="parameters">
                    <li className="parameters__item parameters__item--top">difficulty</li>
                    <li className="parameters__item parameters__item--right">interest</li>
                    <li className="parameters__item parameters__item--bottom">inspiring</li>
                    <li className="parameters__item parameters__item--left">abstract</li>
                </ul>
                <div
                    style={{
                        width: '100%',
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Radar
                        data={data}
                        options={options}
                    />
                </div>
            </div>
        );
    }
}

export default Test5;