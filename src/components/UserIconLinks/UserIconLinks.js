import React from 'react'
import { v4 as uuidv4, v4 } from 'uuid';

import UserIcon from './UserIconLink/UserIconLink'

export default function UserIconLinks(  props ) {
    const userIconLinks = [];
    if(props.iconData && props.iconData.length && props.iconData.length !== 0) {
        props.iconData.forEach(data => {
            userIconLinks.push(<UserIcon type={data.type} to={data.to} key={v4()}/>)
        });
    }
    return (
        <React.Fragment>
            {userIconLinks}
        </React.Fragment>
    )
}
