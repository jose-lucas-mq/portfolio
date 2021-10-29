import React from "react"

import { Wrapper } from "./main.style"

import { NavBar } from './../../components/navBar'
import { Button } from './../../components/button'
import { About } from './../../components/about'
import { Astronaut } from './../../components/astronaut'
import { Introduction } from './../../components/intro'
import { SocialMedia } from './../../components/socialMedia'

import { FaInstagram, FaGithub, FaLinkedin, FaSpotify, FaTwitter, FaTwitch } from 'react-icons/fa';



const Main = () => {
    return (

        <>
            <NavBar />
            <About />
            <Button content={'Fale comigo'} />
            <Astronaut />
            <Introduction />
            <Wrapper>
                <SocialMedia icon={<FaInstagram/>} link={'https://www.instagram.com/joze_lucas/'} user={'@joze_lucas'} />
                <SocialMedia icon={<FaGithub/>} link={'https://github.com/jose-lucas-mq'} user={'jose-lucas-mq'} />
                <SocialMedia icon={<FaLinkedin/>} link={'https://www.linkedin.com/in/jos%C3%A9-lucas-marinho-queiroz-8857381ab/'} user={'José Lucas'} />
                <SocialMedia icon={<FaSpotify/>} link={'https://open.spotify.com/user/4pes2xs16wpievg3ijbwkde5u?si=34012a921a9f4e90'} user={'joze_lucas'} />
                <SocialMedia icon={<FaTwitter/>} link={'https://twitter.com/joze__lucas'} user={'@joze__lucas'} />
                <SocialMedia icon={<FaTwitch/>} link={'https://twitch.tv/joze_lucas_'} user={'Dev José Lucas'} />
            </Wrapper>
        </>

    )
}

export { Main }