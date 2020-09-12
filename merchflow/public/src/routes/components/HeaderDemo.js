import React from 'react';
import PropTypes from 'prop-types';
import { Media } from 'reactstrap';

const HeaderDemo = (props) => (
    <Media className={ `mb-3 ${ props.className }` }>
        <Media body>
            <h4 className="mt-1">
                {props.title}
            </h4>
        </Media>
    </Media>
)
HeaderDemo.propTypes = {
    no: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    title: PropTypes.string,
    subTitle: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string
};
HeaderDemo.defaultProps = {
    no: 0,
    title: "Waiting for Data...",
    subTitle: "Waiting for Data..."
};

export { HeaderDemo };
