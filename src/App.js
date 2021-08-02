import React, { Component } from 'react'
import './App.css'
import Lotterycard from './Lotterycard'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Lottery Generator </h1>
        <Lotterycard nballs={8} title="Daily Lotto!" maxValue={99} />
        <Lotterycard nballs={6} title="Mini Lotto" maxValue={40} />
      </div>
    )
  }
}

export default App
