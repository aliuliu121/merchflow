import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../../../img/merchflow_logo_transparent.png';

const HeaderAuth = (props) => (
    <div className="mb-4">
        <div className="mb-4 text-center">
            <Link to="/" className="d-inline-block">
                {
                    props.icon ? (
                        <i className={ `fa fa-${ props.icon } fa-3x ${ props.iconClassName }` }></i>
                    ) : (
                        <img
                            src={logo}
                            width='350px'
                            className='mb-0'
                            alt="merchflow logo"
                        />
                    )
                }
            </Link>
        </div>
        <h5 className="text-center mb-4">
            { props.title }
        </h5>
        <p className="text-center">
            { props.text }
        </p>
    </div>
)
HeaderAuth.propTypes = {
    icon: PropTypes.node,
    iconClassName: PropTypes.node,
    title: PropTypes.node,
    text: PropTypes.node,
};
HeaderAuth.defaultProps = {
    title: "Waiting for Data...",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure voluptas aperiam odit, reiciendis dicta nihil.",
    iconClassName: "text-theme"
};

export { HeaderAuth };
