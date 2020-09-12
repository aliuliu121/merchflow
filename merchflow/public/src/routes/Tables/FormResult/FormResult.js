import React from 'react';
import { Container, Row, Col } from '../../../components';

import {
    AdvancedTableA,
    AdvancedTableB,
    BasicTable,
    BorderedTable,
    CellEdit,
    ClearSearch,
    LargeTable,
    SortTable
} from './components';
import { HeaderMain } from "../../components/HeaderMain";

export const FormResult = () => (
    <Container>
        <HeaderMain 
            title="Form Results"
            className="mb-5 mt-4"
        />
        <Row className="mb-5">
            <Col>
                <AdvancedTableA />
            </Col>
        </Row>
    </Container>
);
