import React, { useState } from "react"
import Header from '../components/header'
import Box from '../components/Box'
import style from '../../static/style.module.css'

const About = () => {
    const [num, setNum] = useState(0)
    
    return (
        <div>
            <Header />
            <h1>About page</h1>
            <Box num={num} />
            <button className={style.redBtn} onClick={() => setNum(num + 1)}>+</button>
		    <button onClick={() => setNum(num > 0 ? num - 1 : num)}>-</button>
        </div>
    )
}

export default About