import React, { Component } from "react"
import Header from '../components/header'

class Home extends Component {
    state = {
        num: 1
    }
    render() {
        return (
            <div>
                <Header />
                <h1>Home page</h1>
                <p>Num : {this.state.num}</p>
                <button onClick={() => this.addNum()}>+</button>
		        <button onClick={() => this.decreaseNum()}>-</button>
            </div>
        )
    }

    addNum () {
		this.setState({
            num: this.state.num + 1
        })
	}

	decreaseNum () {
		this.setState({
            num: this.state.num > 0 ? this.state.num-1 : this.state.num
        })
	}
}

export default Home
