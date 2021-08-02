import React, { Component } from 'react'
import Lottoball from './Lottoball'
import './Lotterycard.css'

export class Lotterycard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            balls: Array.from({ length: this.props.nballs })
        }
        this.handleClick = this.handleClick.bind(this)
    }
    static defaultProps = {
        nballs: 6,
        title: "Daily Lotto",
        maxValue: 40
    }

    generateLotto() {

        this.setState(curState => ({
            balls: curState.balls.map((num) => Math.floor((Math.random() * this.props.maxValue + 1))
            )
        }));
    }
    handleClick() {
        this.generateLotto();

    }
    render() {
        return (
            <div className="lotto-card">
                <div className="lotto-title">{this.props.title}</div>
                <div className="lotto-balls">
                    {this.state.balls.map((ballnum) => <Lottoball number={ballnum} />)}

                </div>
                <button className="lotto-gen-btn" onClick={this.handleClick}>Generate</button>
            </div>

        )
    }
}

export default Lotterycard
