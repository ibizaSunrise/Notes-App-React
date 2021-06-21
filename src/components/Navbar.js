import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

    return (

        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="navbar-brand">
                Notes App
            </div>
            <ul className="navbar-nav">
                <li className="nav-item ">
                    <NavLink className="nav-link" to="/" exact>Главная</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">Информация</NavLink>
                </li>

            </ul>
        </nav>
    )
}
