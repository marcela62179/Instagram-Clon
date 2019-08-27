import React from 'react';

const SidebarSection = (props) => {
    const { children, title } = props
    return (
        <ul>
            <li className='sidebarItems-title'>{title}</li>
            {children}
        </ul>
    );
}

export default SidebarSection;