import React from 'react'

import { Phrase } from './titles.style'

const Title = ({content}) => {
    return (
        <>
            <Phrase>
                {content}
            </Phrase>
        </>
    )
}

export { Title }