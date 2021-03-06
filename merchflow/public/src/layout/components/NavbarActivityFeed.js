import React from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker/locale/en_US';
import _ from 'lodash';
import PropTypes from 'prop-types';

import {
    UncontrolledDropdown,
    DropdownToggle,
    IconWithBadge,
    Badge,
    ExtendedDropdown,
    ListGroup,
    ListGroupItem,
    Media
} from './../../components';

/*eslint-disable */
const activityFeedIcons = [
    <span className="fa-stack fa-lg fa-fw d-flex mr-3">
        <i className="fa fa-circle fa-fw fa-stack-2x text-success"></i>
        <i className="fa fa-check fa-stack-1x fa-fw text-white"></i>
    </span>,
    <span className="fa-stack fa-lg fa-fw d-flex mr-3">
        <i className="fa fa-circle fa-fw fa-stack-2x text-danger"></i>
        <i className="fa fa-close fa-stack-1x fa-fw text-white"></i>
    </span>,
    <span className="fa-stack fa-lg fa-fw d-flex mr-3">
        <i className="fa fa-circle fa-fw fa-stack-2x text-warning"></i>
        <i className="fa fa-exclamation fa-stack-1x fa-fw text-white"></i>
    </span>,
    <span className="fa-stack fa-lg fa-fw d-flex mr-3">
        <i className="fa fa-circle fa-fw fa-stack-2x text-primary"></i>
        <i className="fa fa-info fa-stack-1x fa-fw text-white"></i>
    </span>
];
/*eslint-enable */

const NavbarActivityFeed = (props) => (
    <UncontrolledDropdown nav inNavbar { ...props }>
        <DropdownToggle nav>
            <IconWithBadge
                badge={ <Badge pill color="primary">1</Badge> }
            >
                <i className="fa fa-bell-o fa-fw" />
            </IconWithBadge>
        </DropdownToggle>
        <ExtendedDropdown right>
            <ExtendedDropdown.Section className="d-flex justify-content-between align-items-center">
                <h6 className="mb-0">Activity Feed</h6>
                <Badge pill>1</Badge>
            </ExtendedDropdown.Section>

            <ExtendedDropdown.Section list>
                <ListGroup>
                {
                    _.times(1, (index) => (
                        <ListGroupItem key={ index } action>
                            <Media>
                                <Media left>
                                    { activityFeedIcons[index%4] }
                                </Media>
                                <Media body>
                                    <span className="h6">
                                        Andrew Carnegie
                                    </span> just completed the delivery form for event 
                                    <span className="h6"> PennApps XXI</span>.
                                    <div className="small mt-2">
                                        Click on the form result page to view submission.
                                    </div>
                                    <div className="small mt-2">
                                        Sun Sept 17 2020 04:11:36 GMT-0400 (EDT)
                                    </div>
                                </Media>
                            </Media>
                        </ListGroupItem>
                    ))
                }
                </ListGroup>
            </ExtendedDropdown.Section>

            <ExtendedDropdown.Section className="text-center" tag={ Link} to="/apps/widgets">
                See All Notifications
                <i className="fa fa-angle-right fa-fw ml-2" />
            </ExtendedDropdown.Section>
        </ExtendedDropdown>
    </UncontrolledDropdown>
);
NavbarActivityFeed.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

export { NavbarActivityFeed };
