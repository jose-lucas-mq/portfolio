import React from "react"
import Typical from 'react-typical'

import { Greetings, Bold } from './about.style'

const About = () => {
    return (
        <Greetings>
            Olá, me chamo José Lucas

            <br />
            <br />
            <br />

            Sou
            <Bold>
                <Typical
                steps=
                    {['desenvolvedor front end ', 2500,
                        'desginer ', 2500,
                        'pesquisador UI/UX ', 2500,
                        'fã de Star Wars ', 2500,
                    ]}
                    loop={Infinity}
                    wrapper="p"
                />
            </Bold>
        </Greetings>
    )
}

export { About }