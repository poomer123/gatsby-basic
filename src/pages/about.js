import React, { useState } from "react"
import Header from '../components/header'

const About = () => {
    const [num, setNum] = useState(0)
    
    return (
        <div>
            <Header />
            <h1>About page</h1>
            <p>Num : {num}</p>
            <button onClick={() => setNum(num + 1)}>+</button>
		    <button onClick={() => setNum(num > 0 ? num - 1 : num)}>-</button>
        </div>
    )
}

export default About