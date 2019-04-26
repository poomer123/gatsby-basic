import React from "react"
import { Link } from 'gatsby'
import "../styles/main.scss"

export default () => (
    <div>
        <nav className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about/">About</Link></li>
            </ul>
        </nav>
    </div>
)
