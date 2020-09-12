import React from 'react';
import PropTypes from 'prop-types';


const FooterText = (props) => (
	<React.Fragment>
		<p>PennApps XXI project by Amy & Allen Liu. Built with AirFrame</p>
	</React.Fragment>
)
FooterText.propTypes = {
    year: PropTypes.node,
	name: PropTypes.node,
	desc: PropTypes.node,
};
FooterText.defaultProps = {
    year: "2018",
    name: FooterText,
    desc: "Bootstrap 4, React 16 (latest) & NPM"
};

export { FooterText };
