import styled from 'styled-components'

export const ButtonDefault = styled.button`
    width: 85%;
    padding: 20px;
    margin: 0px 25px;
    border-radius: 10px;
    cursor: pointer;
    
    font-weight: 600;
    font-size: 1.3em;
    
    color: #FFFFFF;
    background: linear-gradient(90deg, #8B04BA 0%, #5C007C 100%);
    transition: .5s;

    &:hover{
        border-radius: 50px;
    }
`