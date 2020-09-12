import React from 'react';

import { SidebarMenu } from './../../components';

export const SidebarMiddleNav = () => (
    <SidebarMenu>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-home"></i>}
            title="Dashboard"
            to='/user/main-dashboard'
        />
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-check-square-o"></i>}
            title="Delivery form"
            to='/user/delivery-form'
        />
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-trello"></i>}
            title="Form result"
            to='/user/form-result'
        />
    </SidebarMenu >
);
