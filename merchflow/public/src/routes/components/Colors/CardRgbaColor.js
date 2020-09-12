import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { 
    Card, 
    CardBody, 
    CardFooter,
    Button,
    CardHeader
} from './../../../components';

const CardRgbaColor = (props) => (
    <Card className={ `mb-3 ${ props.cardClass }` }>
    {
        _.times(9, (index) => {
            let Tag = CardFooter;
            Tag = index === 0 ? CardHeader : CardBody;
            Tag = index === 8 ? CardFooter : CardBody;
            const colorId = `${ props.color }-0${ index + 1 }`
            return (
                <Tag className={ `d-flex justify-content-center b-0 bg-${ colorId }` } key={ index }>
                </Tag>
            );
        })
    }
    </Card>
);
CardRgbaColor.propTypes = {
    cardClass: PropTypes.node,
    color: PropTypes.node
};
CardRgbaColor.defaultProps = {
    cardClass: "",
    color: "Waiting for Data..."
};

export { CardRgbaColor };
