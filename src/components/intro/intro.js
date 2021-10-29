import React from 'react'

import { Title } from './../titles'
import { Paragraph } from './intro.style'

const Introduction = () => {
    return (
        <>
            <Title content={'Sobre mim'} />
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem elementum ullamcorper turpis vestibulum libero. 
                Eros nec venenatis, auctor amet. Luctus massa pretium purus rhoncus id lacinia. Vivamus mi mi at at neque eget vel 
                congue. At odio suspendisse velit in lobortis vitae. Varius at lectus sit amet. Semper quisque diam tincidunt amet 
                tellus eget convallis cursus. Quis sit integer integer. <br />
                Eu adipiscing nam quis nibh pulvinar massa pellentesque. Nisi, dapibus aliquet urna egestas cursus nunc. 
                Tortor varius porttitor sodales laoreet ut consectetur neque. Quam quam pellentesque mauris.
            </Paragraph>
        </>
    )
}

export { Introduction }