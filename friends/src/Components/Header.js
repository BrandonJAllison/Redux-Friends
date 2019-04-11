import React from 'react'
import { Link } from 'react-router-dom'

const header={
    height: '25px',
    color: 'white',
    background: 'black'
}

const Header = () => {
    return (
        <div style={header}>

            <Link to ="/login">Login</Link>

        </div>
    )
}



export default Header