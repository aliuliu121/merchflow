import React from 'react';
import faker from 'faker/locale/en_US';
import { Link } from 'react-router-dom';

import { 
    Button,
    Sidebar,
    UncontrolledButtonDropdown,
    UncontrolledTooltip,
    Avatar,
    AvatarAddOn,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from './../../../components';
import {
    HeaderMain
} from '../../components/HeaderMain'
import { randomAvatar } from './../../../utilities';
import logo from './../../../images/merchflow_square.jpg'
import { VersionSelector } from '../VersionSelector';

import pennappsLogo from '../../../img/pennappsxxi_logo.png'

const avatarImg = randomAvatar();

const SidebarTopA = () => (
    <React.Fragment>
        { /* START: Sidebar Default */ }
        <Sidebar.HideSlim>
            <Sidebar.Section className="pt-0">
                <Link to="/user/main-dashboard" className="d-block">

                    <div className="hr-text hr-text-center mt-4 mb-4">
                    </div>

                    <HeaderMain
                        title="Current Event"
                        className="mb-0 text-center mb-lg-3"
                        smaller="1"
                    />
                    <div>
                    <div className="d-flex">
                        <VersionSelector
                            down
                            sidebar
                            dashboard="Airframe"
                            render={(currentVersion) => (
                                <React.Fragment>
                                    <div className="h4 fw-600 align-self-center sidebar-logo mb-1 text-center">
                                        <img src={pennappsLogo} className="mb-1" width='200px' />
                                        <i className="fa align-self-center fa-angle-down sidebar__link--muted"></i>
                                    </div>
                                    <div className="hr-text hr-text-center pt-4 pb-2">
                                    </div>
                                    <div
                                        className="job-title small text-left sidebar__link--muted"
                                    >
                                    </div>
                                </React.Fragment>
                            )}
                        />
                    </div>
                    </div>






                    
                    {/* <Sidebar.HideSlim>
                        <Avatar.Image
                            size="lg"
                            src={ logo }
                            addOns={[
                                <AvatarAddOn.Icon 
                                    className="fa fa-circle"
                                    color="white"
                                    key="avatar-icon-bg"
                                />,
                                <AvatarAddOn.Icon 
                                    className="fa fa-circle"
                                    color="success"
                                    key="avatar-icon-fg"
                                />
                            ]}
                        />
                    </Sidebar.HideSlim> */}
                </Link>
                
                {/* <UncontrolledButtonDropdown>
                    <DropdownToggle color="link" className="pl-0 pb-0 btn-profile sidebar__link">
                        { faker.name.firstName() } { faker.name.lastName() }
                        <i className="fa fa-angle-down ml-2"></i>
                    </DropdownToggle>
                    <DropdownMenu persist>
                    <DropdownItem header>
                        { faker.name.firstName() } { faker.name.lastName() }
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem tag={ Link } to="/apps/profile-details">
                        My Profile
                    </DropdownItem>
                    <DropdownItem tag={ Link } to="/apps/settings-edit">
                        Settings
                    </DropdownItem>
                    <DropdownItem tag={ Link } to="/apps/billing-edit">
                        Billings
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem tag={ Link } to="/pages/login">
                        <i className="fa fa-fw fa-sign-out mr-2"></i>
                        Sign Out
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown> */}
                {/* <div className="small sidebar__link--muted">
                    { faker.name.jobTitle() }
                </div> */}
            </Sidebar.Section>
        </Sidebar.HideSlim>
        { /* END: Sidebar Default */ }

        { /* START: Sidebar Slim */ }
        {/* <Sidebar.ShowSlim>
            <Sidebar.Section>
                <Avatar.Image
                    size="sm"
                    src={ avatarImg }
                    addOns={[
                        <AvatarAddOn.Icon 
                            className="fa fa-circle"
                            color="white"
                            key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon 
                            className="fa fa-circle"
                            color="success"
                            key="avatar-icon-fg"
                        />
                    ]}
                />
            </Sidebar.Section>
        </Sidebar.ShowSlim> */}
        { /* END: Sidebar Slim */ }
    </React.Fragment>
)

export { SidebarTopA };
