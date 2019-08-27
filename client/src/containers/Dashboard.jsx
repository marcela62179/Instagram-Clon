import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import Base from '../layouts/Base';
import Menu from '../components/Dashboard/Menu';

import Analytics from '../components/Dashboard/analytics/analytics';
import News from '../components/Dashboard/news/news';
import Calendar from '../components/Dashboard/calendar/calendar';
import Users from '../components/Dashboard/users/users';
import Config from '../components/Dashboard/config/config';

const Dashboard = (props) => {

    const [sidebarOpen, setSidebarOpen] = useState(true);

    let closeSidebar = () => {
        if(sidebarOpen){
            setSidebarOpen(false);
        }else{
            setSidebarOpen(true);
        }
    }

    return (
        <Base title='Dashboard' description=''>
            <Menu closeSidebar={() => closeSidebar()} sidebarOpen={sidebarOpen} />
            <div className="container-fluid" style={sidebarOpen ? ({ paddingLeft: '300px' }) : ({ paddingLeft: '50px' })}>
                <Route exact path='/dashboard/analytics' component={Analytics} />
                <Route exact path='/dashboard/news' component={News} />
                <Route exact path='/dashboard/calendar' component={Calendar} />
                <Route exact path='/dashboard/users' component={Users} />
                <Route exact path='/dashboard/config' component={Config} />
            </div>
        </Base>
    );
}

export default Dashboard;