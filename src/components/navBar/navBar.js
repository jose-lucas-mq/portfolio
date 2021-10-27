import React from "react"

import logo from './../../images/logo.svg'

import { Nav } from './navBar.style'

const NavBar = ({src}) => {
    return (
        <Nav>
            <img alt={'Logo'} src={logo}/>
        </Nav>
    )
}

export { NavBar }