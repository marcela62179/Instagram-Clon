import React from 'react';
import SidebarList from './SidebarList';
import SidebarSection from './SidebarSection';
import SidebarItem from './SidebarItem';
import SidebarUserInfo from './SidebarUserInfo';

// Icons
import AnalitycsIcon from '../../assets/icons/metrics.svg'
import NewsPaperIcon from '../../assets/icons/newspaper.svg'
import CalendarIcon from '../../assets/icons/calendar.svg'
import UsersIcon from '../../assets/icons/group.svg'
import ConfigIcon from '../../assets/icons/config.svg'

const Sidebar = () => {


    return (
        <aside className="sidebar">
            <SidebarList>     
            
                <SidebarUserInfo />

                <SidebarSection title='Dashboard'>   
                    <SidebarItem to='/dashboard/analytics' icon={AnalitycsIcon} title='Analytics' />
                    <SidebarItem to='/dashboard/news' icon={NewsPaperIcon} title='News' />
                    <SidebarItem to='/dashboard/calendar' icon={CalendarIcon} title='Calendar' />
                </SidebarSection>

                <SidebarSection title='Settings'>
                    <SidebarItem to='/dashboard/users' icon={UsersIcon} title='Users' />
                    <SidebarItem to='/dashboard/config' icon={ConfigIcon} title='Config' />
                    
                </SidebarSection>
            </SidebarList>
        </aside>
    );
}

export default Sidebar;