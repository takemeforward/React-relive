import React from 'react'
import '../styles/App.css'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}
