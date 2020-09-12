import React from 'react';
import PropTypes from 'prop-types';

import {  
    Card, 
    CardBody,
    Badge
} from '../../../../components';

import {
    TinyDonutChart
} from "./TinyDonutChart"
import {
    TinyBarChart
} from "./TinyBarChart"


const percents = [
    "15",
    "25",
    "30",
    "35",
    "40",
    "45",
    "55",
    "60",
    "75",
    "80",
    "95"
];

const caret = [
    "down",
    "up"
];

const CardSystem = (props) => (
    <Card className="mb-3 mb-lg-0">
       <CardBody className="pb-0">
           <div className="d-flex">
               <span>
                    <Badge pill className="mb-3" color={ props.badgeColor } >
                        <i className={` fa fa-fw fa-caret-up`} />
                        { props.caret } {props.unit}
                    </Badge>
                    <h6 className="mb-0">
                        { props.title }
                    </h6>
                    <h2 className="mb-3">
                        { props.value } <small>{ props.unit }</small>
                    </h2>
                </span>
                <span className="text-right ml-auto">
                    <TinyDonutChart 
                        pieColor={props.pieColor}
                        groupA={props.groupA}
                        groupB={props.groupB}
                    />
                </span>
            </div>
            <TinyBarChart />
       </CardBody>
    </Card>
);

CardSystem.propTypes = {
    title: PropTypes.node,
    badgeColor: PropTypes.string,
    value: PropTypes.string,
    caret: PropTypes.string,
    groupA: PropTypes.string,
    groupB: PropTypes.string,
    unit: PropTypes.node,
    pieColor: PropTypes.string
};
CardSystem.defaultProps = {
    title: "Waiting...",
    badgeColor: "secondary",
    value: "58",
    caret: "23",
    unit: "%",
    pieColor: "500"
};

export { CardSystem };
