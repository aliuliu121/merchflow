import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { Comparator, dateFilter } from 'react-bootstrap-table2-filter'
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import _ from 'lodash';
import faker from 'faker/locale/en_US';
import moment from 'moment';

import {
    Badge,
    Button,
    CustomInput,
    StarRating,
    ButtonGroup
} from '../../../../components';
import { CustomExportCSV } from './CustomExportButton';
import { CustomSearch } from './CustomSearch';
import { CustomPaginationPanel } from './CustomPaginationPanel';
import { CustomSizePerPageButton } from './CustomSizePerPageButton';
import { CustomPaginationTotal } from './CustomPaginationTotal';
import {
    buildCustomTextFilter,
    buildCustomSelectFilter,
    buildCustomNumberFilter
} from '../filters';

const INITIAL_PRODUCTS_COUNT = 500;

const ProductQuality = {
    Good: 'product-quality__good',
    Bad: 'product-quality__bad',
    Unknown: 'product-quality__unknown'
};

const sortCaret = (order) => {
    if (!order)
        return <i className="fa fa-fw fa-sort text-muted"></i>;
    if (order)
        return <i className={`fa fa-fw text-muted fa-sort-${order}`}></i>
}

const generateRow = (index) =>{
    const first = faker.name.firstName();
    const second = faker.name.lastName();
    const willing = faker.random.arrayElement(["yes", "no"])

    return (
        {
            email: faker.internet.email(first, second, 'gmail') + ".com",
            name: second + ", " + first,
            status: faker.random.arrayElement(['Missing form', 'Missing confirmation', 'Shipped']),
            address: faker.address.streetAddress("true"),
            zipcode: faker.address.zipCode("#####"),
            phoneNum: faker.phone.phoneNumber("###-###-####"),
            willing: willing,
            completionDate: faker.date.past().toString(),
            deliveryRange: willing == "yes" ? faker.random.number({min:1, max:10}) : "0",
            feedback: faker.random.number(3) == 0 ? "Nothing much, thanks!" : faker.random.number(10) == 0 ? "N/a" : ""
        }
    );
};

export class AdvancedTableA extends React.Component {
    constructor() {
        super();
        
        this.state = {
            products: _.times(INITIAL_PRODUCTS_COUNT, generateRow),
            selected: []
        };

        this.headerCheckboxRef = React.createRef();
    }

    handleSelect(row, isSelected) {
        if (isSelected) {
            this.setState({ selected: [...this.state.selected, row.id] })
        } else {
            this.setState({
                selected: this.state.selected.filter(itemId => itemId !== row.id)
            })
        }
    }

    handleSelectAll(isSelected, rows) {
        if (isSelected) {
            this.setState({ selected: _.map(rows, 'id') })
        } else {
            this.setState({ selected: [] });
        }
    }

    handleAddRow() {
        const currentSize = this.state.products.length;

        this.setState({
            products: [
                generateRow(currentSize + 1),
                ...this.state.products,
            ]
        });
    }

    handleDeleteRow() {
        this.setState({
            products: _.filter(this.state.products, product =>
                !_.includes(this.state.selected, product.id))
        })
    }

    handleResetFilters() {
        this.nameFilter('');
        this.qualityFilter('');
        this.priceFilter('');
        this.satisfactionFilter('');
    }

    createColumnDefinitions() {
        return [{
            dataField: 'email',
            text: 'Email',
            headerFormatter: column => (
                <React.Fragment>
                    <span className="text-nowrap">{ column.text }</span>
                    <a
                        href="javascript:;"
                        className="d-block small text-decoration-none text-nowrap"
                        onClick={ this.handleResetFilters.bind(this) }
                    >
                        Reset Filters <i className="fa fa-times fa-fw text-danger"></i>
                    </a>
                </React.Fragment>
            )
        }, {
            dataField: 'name',
            text: 'Name',
            sort: true,
            sortCaret,
            formatter: (cell) => (
                <span className="text">
                    { cell }
                </span>
            ),
            ...buildCustomTextFilter({
                placeholder: 'Enter product name...',
                getFilter: filter => { this.nameFilter = filter; }
            })
        }, {
            dataField: 'status',
            text: 'Status',
            formatter: (cell) => {
                let pqProps;
                switch (cell) {
                    case "Missing form":
                        pqProps = {
                            color: 'warning',
                            text: 'Missing form'
                        }
                    break;
                    case "Missing confirmation":
                        pqProps = {
                            color: 'danger',
                            text: 'Missing confirmation'
                        }
                    break;
                    case "Success":
                    default:
                        pqProps = {
                            color: 'success',
                            text: 'Shipped'
                        }
                }

                return (
                    <Badge color={pqProps.color}>
                        { pqProps.text }
                    </Badge>
                )
            },
            sort: true,
            sortCaret,
            ...buildCustomSelectFilter({
                placeholder: 'Select Quality',
                options: [
                    { value: "Shipped", label: 'Shipped' },
                    { value: "Missing confirmation", label: 'Missing confirmation' },
                    { value: "Missing form", label: 'Missing form' }
                ],
                getFilter: filter => { this.qualityFilter = filter; }
            })
        }, {
            dataField: 'address',
            text: 'Address',
            sort: true,
            sortCaret,
            formatter: (cell) => (
                <span className="text">
                    { cell }
                </span>
            ),
            ...buildCustomTextFilter({
                placeholder: 'Enter address ...',
                getFilter: filter => { this.nameFilter = filter; }
            })
        }, {
            dataField: 'zipcode',
            text: 'Zipcode',
            sort: true,
            sortCaret,
            formatter: (cell) => (
                <span className="text">
                    { cell }
                </span>
            ),
            ...buildCustomTextFilter({
                placeholder: 'Enter zip ...',
                getFilter: filter => { this.nameFilter = filter; }
            })
        }, {
            dataField: 'phoneNum',
            text: 'Phone',
            sort: true,
            sortCaret,
            formatter: (cell) => (
                <span className="text text-nowrap">
                    { cell }
                </span>
            ),
            ...buildCustomTextFilter({
                placeholder: 'Enter number ...',
                getFilter: filter => { this.nameFilter = filter; }
            })
        }, {
            dataField: 'willing',
            text: 'Willing to help?',
            formatter: (cell) => {
                let pqProps;
                switch (cell) {
                    case "yes":
                        pqProps = {
                            color: 'success',
                            text: 'Yes!'
                        }
                        break;
                    default:
                        pqProps = {
                            color: 'light',
                            text: 'no response'
                        }
                        break;
                }

                return (
                    <Badge color={pqProps.color}>
                        { pqProps.text }
                    </Badge>
                )
            },
            sort: true,
            sortCaret,
            ...buildCustomSelectFilter({
                placeholder: 'Select option',
                options: [
                    { value: "yes", label: 'Yes!' },
                    { value: "no", label: 'no response' },
                ],
                getFilter: filter => { this.qualityFilter = filter; }
            })
        }, {
            dataField: 'deliveryRange',
            text: 'Range',
            sort: true,
            sortCaret,
            ...buildCustomNumberFilter({
                comparators: [Comparator.EQ, Comparator.GT, Comparator.LT],
                getFilter: filter => { this.priceFilter = filter; }
            })
        }, {
            dataField: 'completionDate',
            text: 'Form completion',
            formatter: (cell) =>
                moment(cell).format('MM/DD/YYYY'),
            filter: dateFilter({
                className: 'd-flex align-items-center',
                comparatorClassName: 'd-none',
                dateClassName: 'form-control form-control-sm',
                comparator: Comparator.GT,
                getFilter: filter => { this.stockDateFilter = filter; }
            }),
            sort: true,
            sortCaret
            // sort: true,
            // sortCaret,
            // formatter: (cell) => (
            //     <span className="text text-nowrap">
            //         { cell }
            //     </span>
            // ),
            // ...buildCustomTextFilter({
            //     placeholder: 'Enter date ...',
            //     getFilter: filter => { this.nameFilter = filter; }
            // })
            // formatter: (cell) => {
            //     moment(cell).format('MM/DD/YYY')
            // },
            // filter: dateFilter({
            //     className: 'd-flex align-items-center',
            //     comparatorClassName: 'd-none',
            //     dateClassName: 'form-control form-control-sm',
            //     comparator: Comparator.GT,
            //     getFilter: filter => { this.stockDateFilter = filter; }
            // }),
            // sort: true,
            // sortCaret
        }, {
            dataField: 'feedback',
            text: 'Notes & Feedback',
            formatter: (cell) => (
                <span className="text">
                    { cell }
                </span>
            ),
            sort: true,
            sortCaret,
            ...buildCustomTextFilter({
                placeholder: 'Enter keywords ...',
                getFilter: filter => { this.nameFilter = filter; }
            })
        }]; 
    }

    render() {
        const columnDefs = this.createColumnDefinitions();
        const paginationDef = paginationFactory({
            paginationSize: 5,
            showTotal: true,
            pageListRenderer: (props) => (
                <CustomPaginationPanel { ...props } size="sm" className="ml-md-auto mt-2 mt-md-0" />
            ),
            sizePerPageRenderer: (props) => (
                <CustomSizePerPageButton { ...props } />
            ),
            paginationTotalRenderer: (from, to, size) => (
                <CustomPaginationTotal { ...{ from, to, size } } />
            )
        });
        const selectRowConfig = {
            mode: 'checkbox',
            selected: this.state.selected,
            onSelect: this.handleSelect.bind(this),
            onSelectAll: this.handleSelectAll.bind(this),
            selectionRenderer: ({ mode, checked, disabled }) => (
                <CustomInput type={ mode } checked={ checked } disabled={ disabled } />
            ),
            selectionHeaderRenderer: ({ mode, checked, indeterminate }) => (
                <CustomInput type={ mode } checked={ checked } innerRef={el => el && (el.indeterminate = indeterminate)} />
            )
        };

        return (
            <ToolkitProvider
                keyField="id"
                data={ this.state.products }
                columns={ columnDefs }
                search
                exportCSV
            >
            {
                props => (
                    <React.Fragment>
                        <div className="d-flex justify-content-end align-items-center mb-2">
                            <h6 className="my-0">
                                All delivery form responses for the current event
                            </h6>
                            <div className="d-flex ml-auto">
                                <CustomSearch
                                    className="mr-2"
                                    { ...props.searchProps }
                                />
                                <ButtonGroup className="mr-2">
                                    <Button
                                        size="sm"
                                        color="dark"
                                        onClick={ this.handleDeleteRow.bind(this) }
                                        href='/public/src/resources/merchflow-sample-shipping-labels.pdf' 
                                        download="merchflow-sample-shipping-labels.pdf">
                                            Generate shipping labels
                                    </Button>
                                </ButtonGroup>
                                <ButtonGroup>
                                    <CustomExportCSV
                                        { ...props.csvProps }
                                    >
                                        Export
                                    </CustomExportCSV>
                                    <Button
                                        size="sm"
                                        outline
                                        onClick={ this.handleDeleteRow.bind(this) }
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        size="sm"
                                        outline
                                        onClick={ this.handleAddRow.bind(this) }
                                    >
                                        <i className="fa fa-fw fa-plus"></i>
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>
                        <BootstrapTable
                            classes="table-responsive"
                            pagination={ paginationDef }
                            filter={ filterFactory() }
                            selectRow={ selectRowConfig }
                            bordered={ false }
                            responsive
                            { ...props.baseProps }
                        />
                    </React.Fragment>
                )
            }
            </ToolkitProvider>
        );
    }
}