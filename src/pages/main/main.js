import React from "react"

import { NavBar } from './../../components/navBar'
import { Button } from './../../components/button'
import { About } from './../../components/about'
import { Astronaut } from './../../components/astronaut'


const Main = () => {
    return (
        
            <>
                <NavBar />
                <About/>
                <Button />
                <Astronaut />
            </>
        
    )
}

export { Main }