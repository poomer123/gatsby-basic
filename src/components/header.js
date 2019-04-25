import React from "react"
import { Link } from 'gatsby'

export default () => (
    <div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about/">About</Link></li>
            </ul>
        </nav>
    </div>
)
