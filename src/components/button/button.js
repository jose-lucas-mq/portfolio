import React from "react"

import { ButtonDefault } from './button.style'

const Button = ({content}) => {
    return (
        <ButtonDefault>
            {content}
        </ButtonDefault>
    )
}

export { Button }