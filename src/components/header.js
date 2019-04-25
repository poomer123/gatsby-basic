import React from "react"
import { Link } from 'gatsby'
import '../../static/style.css'

export default () => (
    <div>
        <nav>
            <ul>
                <li className="p15"><Link to="/">Home</Link></li>
                <li className="p15"><Link to="/about/">About</Link></li>
            </ul>
        </nav>
    </div>
)
