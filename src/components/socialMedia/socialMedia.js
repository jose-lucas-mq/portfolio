import React from 'react'

import {  Media, Icon, UserName } from './socialMedia.style'

const SocialMedia = ({ link, icon, user }) => {
    return (
        <Media href={link} target="_blank">
            <Icon>
                {icon}
            </Icon>
            <UserName>
                {user}
            </UserName>
        </Media>
    )
}

export { SocialMedia }