import React from 'react'
import { Link } from 'react-router-dom'

const Logout = () => {

    return (
        <div>
            <h1>Thanks for Checking Out Lambda Friends</h1>
            <h3>Want to log back in?</h3>

            <Link to="/login">Log In Again</Link>

        </div>

    )
}


export default Logout