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
                {this.state.num}
            </div>
        )
    }
}

export default Home
