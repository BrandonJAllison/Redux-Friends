import React from 'react'
import { NavLink } from 'react-router-dom'
import './Components.css';


const header={
    height: '60px',
    color: 'white',
    background: '#A0001E',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
}

const style ={
    color: 'white',
    textDecoration: 'none',
    opacity: '.6'
}

const Header = () => {
    return (
        <div style={header}>

            <NavLink   to ="/login" 
                        style={style}
                        activeStyle={{
                        textDecoration: "underline",
                        color: "white",
                        opacity: "1"
                        }}>Login</NavLink>
            <NavLink 
                       style={style}
                       activeStyle={{
                       textDecoration: "underline",
                       color: "white",
                       opacity: "1"
                        }}  to ="/friendslist">Friends List</NavLink>
            <NavLink   
                        onClick={() => localStorage.removeItem('token')}
                        style={style}
                        activeStyle={{
                        textDecoration: "underline",
                        color: "white",
                        opacity: "1"
                        }}  to ="/logout">Log Out</NavLink>
             

        </div>
    )
}



export default Header