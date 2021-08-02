import React, { Component } from 'react'
import './Lottoball.css'

export class Lottoball extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        number: null
    }


    render() {
        return (
            this.props.number !== null ?
                <div className="ball" display={"none"}>
                    {this.props.number}
                </div>
                :
                <div></div>
        )
    }
}

export default Lottoball
