import React from "react"

import { NavBar } from './../../components/navBar'
import { Button } from './../../components/button'
import { About } from './../../components/about'
import { Astronaut } from './../../components/astronaut'
import { Introduction } from './../../components/intro'


const Main = () => {
    return (
        
            <>
                <NavBar />
                <About/>
                <Button />
                <Astronaut />
                <Introduction />
            </>
        
    )
}

export { Main }