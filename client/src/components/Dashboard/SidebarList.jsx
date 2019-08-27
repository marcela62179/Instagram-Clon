import React from 'react';


const SidebarList = (props) => {
    const {children} = props;
    return (
        <div className="sidebarItems">
            {children}
        </div>
    );
}
 
export default SidebarList;