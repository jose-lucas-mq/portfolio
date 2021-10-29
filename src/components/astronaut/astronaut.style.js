import styled, { keyframes } from 'styled-components'

import galax from './../../images/galaxy.svg'
import astronaut from './../../images/astronaut.svg'


const floating = keyframes`
    from { 
            -webkit-transform: rotate(-5deg);
    }
    to { 
        -webkit-transform: rotate(5deg);
    }
`

export const Galax = styled.div`
    margin-top: 4%;
    background-image: url('${galax}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 500px;
`

export const Rocketman = styled.div`
    background-image: url('${astronaut}');
    height: 500px;
    background-repeat: no-repeat;
    background-position: center center;
    animation: ${floating} 6s infinite alternate;
`


