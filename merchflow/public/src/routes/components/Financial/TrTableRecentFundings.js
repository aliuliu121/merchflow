import React from 'react';
import _ from 'lodash';
import faker from 'faker/locale/en_US';


const TrTableRecentFundings = () => (
    <React.Fragment>
        {
            _.times(8, (index) => (
                <tr key={ index }>
                    <td className="align-middle">
                        <span className="text-inverse">andrew@andrew.cmu.edu</span>
                    </td>
                    <td className="align-middle">
                        <span> Andrew Carnegie</span>
                    </td>
                    <td className="align-middle">
                        Sept-02-2020
                    </td>
                    <td className="align-middle">
                        5032 Fifth Avenue, Pittsburgh, PA 15213
                    </td>
                    <td className="align-middle">
                        1
                    </td>
                    <td className="align-middle text-right text-nowrap">
                        <a href="#" className="text-decoration-none">View <i className="fa fa-angle-right"></i></a>
                    </td>
                </tr>
            ))
        }
    </React.Fragment>
)

export { TrTableRecentFundings };
