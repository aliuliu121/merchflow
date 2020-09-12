import React from 'react';

import {
    Button,
    Sidebar,
    PopoverBody
} from './../../../components';

import { FooterAuth } from '../Pages/FooterAuth';
import { FooterText } from '../FooterText';
import { VersionSelector } from '../VersionSelector';

const SidebarBottomA = () => (
    <React.Fragment>
        { /* START Desktop */ }
        <Sidebar.HideSlim>
            <Sidebar.Section>
                <FooterAuth className="text-muted" />
            </Sidebar.Section>
        </Sidebar.HideSlim>
        { /* END Desktop */ }

        { /* START Slim Only */ }
        { /* END Slim Only */ }
    </React.Fragment>
)

export { SidebarBottomA };
