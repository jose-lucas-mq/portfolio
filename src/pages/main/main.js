import React from "react"

import { NavBar } from './../../components/navBar'
import { Button } from './../../components/button'
import { About } from './../../components/about'


const Main = () => {
    return (
        
            <>
                <NavBar />
                <About/>
                <Button />
            </>
        
    )
}

export { Main }