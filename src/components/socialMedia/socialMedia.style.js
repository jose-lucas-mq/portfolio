import styled from 'styled-components'

export const Icon = styled.div`
    color: #8B04BA;
    font-size: 3em;
    transition: .5s;
`

export const UserName = styled.div`
    color: transparent;
    font-size: .8em;
    transition: .5s;
`

export const Media = styled.a`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin-top: 54px;
    border: 3px solid #8B04BA;
    background-color: transparent;
    transition: .5s;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &:hover{
        border-radius: 20px;
        background-color: #8B04BA;
    }

    &:hover ${Icon}{ 
        color: #FFF;
    }

    &:hover ${UserName}{ 
        color: #FFF;
        margin-top: 5px;
    }
`

