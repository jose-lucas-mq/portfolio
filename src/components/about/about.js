import React from "react"
import Typical from 'react-typical'

import { Greetings, Bold } from './about.style'

const About = () => {
    return (
        <Greetings>
            Olá, me chamo José Lucas

            <br />
            <br />

            Eu sou
            <Bold>
                <Typical
                steps=
                    {[  'dev front end ', 2500,
                        'dev fullstack ', 2500,
                        'estudante ', 2500, 
                        'investidor ', 2500, 
                        'fã de Star Wars ', 2500, 
                        'fã da Marvel ', 2500
                    ]}

                    loop={Infinity}
                    wrapper="p"
                />
            </Bold>
        </Greetings>
    )
}

export { About }