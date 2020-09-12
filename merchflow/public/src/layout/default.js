import React from 'react';
import PropTypes from 'prop-types';

import {
    Layout,
    ThemeProvider,
} from './../components';

import './../styles/bootstrap.scss';
import './../styles/main.scss';
import './../styles/plugins/plugins.scss';
import './../styles/plugins/plugins.css';

import {
    RoutedNavbars,
    RoutedSidebars,
} from './../routes';

const favIcons = [
    { rel: 'icon', href: './../img/merchflow_favicon.png' },

    { rel: 'apple-touch-icon', sizes: '180x180', href: require('./../img/merchflow_favicon.png') },

    { rel: 'icon', type: 'image/jpg', sizes: '32x32', href: require('./../img/merchflow_favicon.png') },
    { rel: 'icon', type: 'image/jpg', sizes: '16x16', href: require('./../img/merchflow_favicon.png') }
];

class AppLayout extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }

    render() {
        const { children } = this.props;
        
        return (
            <ThemeProvider initialStyle="light" initialColor="primary">
                <Layout sidebarSlim favIcons={ favIcons }>
                    { /* --------- Navbar ----------- */ }
                    <Layout.Navbar>
                        <RoutedNavbars />
                    </Layout.Navbar>
                    { /* -------- Sidebar ------------*/ }
                    <Layout.Sidebar>
                        <RoutedSidebars />
                    </Layout.Sidebar>

                    { /* -------- Content ------------*/ }
                    <Layout.Content>
                        { children }
                    </Layout.Content>

                    { /* -- Theme Selector (DEMO) ----*/ }
                    {/* <PageConfigConsumer>
                    {
                        ({ sidebarHidden, navbarHidden }) => (
                            <ThemeSelector styleDisabled={ sidebarHidden && navbarHidden } />
                        )
                    }
                    </PageConfigConsumer> */}
                </Layout>
            </ThemeProvider>
        );
    }
}

export default AppLayout;
