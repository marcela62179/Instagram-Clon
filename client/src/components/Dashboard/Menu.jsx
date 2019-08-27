import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Menu = (props) => {
    const {closeSidebar, sidebarOpen} = props
    return (
        <>
            <Navbar closeSidebar={() => closeSidebar()} sidebarOpen={sidebarOpen} />
            {sidebarOpen ? (
                <Sidebar />
            ):(<></>)}
        </>
    );
}
 
export default Menu;