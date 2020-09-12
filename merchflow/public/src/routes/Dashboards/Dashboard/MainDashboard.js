import React from 'react';
import faker from 'faker/locale/en_US';
import { Link } from 'react-router-dom';
import {
    Container,
    Row,
    Card,
    CardBody,
    CardDeck,
    Badge,
    Table,
    CardTitle,
    Button,
    InputGroup,
    InputGroupAddon,
    Input,
    ListGroup,
    ListGroupItem,
    Media,
    Col
} from '../../../components';
import { setupPage } from '../../../components/Layout/setupPage';

import {
    CardSystem
} from "./components/CardSystem"
import { HeaderMain } from "../../components/HeaderMain";

import {
    ProfileOverviewCard
} from "../../components/Profile/ProfileOverviewCard";

import {
    TasksMedia
} from "../../components/ProjectsDashboards/TasksMedia";
import {
    TinyDonutChart
} from "../../components/ProjectsDashboards/TinyDonutChart"
import {
    TinyDonutChartAllProjects
} from "../../components/ProjectsDashboards/TinyDonutChartAllProjects"
import {
    TimelineMini
} from "../../components/Timeline/TimelineMini"
import {
    TrTableRecentFundings
} from "../../components/Financial/TrTableRecentFundings"
import { DraggableProjects } from './DraggableProjects';

const ProjectsDashboard = () => (
    <Container>
        <Row className="mb-5">
            <Col lg={ 12 }>
                <HeaderMain 
                    title="Main Dashboard"
                    className="mb-4 mb-lg-5"
                />
                <p>
                    Hi, there! This is the dashboard.
                </p>
            </Col>

            <Col lg={ 12 }>
                <div className="hr-text hr-text-center mt-4 mb-4">
                    <span>Overview</span>
                </div>
            </Col>


            <Col lg={ 3 } md={ 6 }>
               <CardSystem
                    title="Number of participant"
                    unit=""
                    badgeColor="primary"
                    pieColor="primary"
               />
            </Col>
            <Col lg={ 3 } md={ 6 }>
               <CardSystem
                    title="Number of invite code sent"
                    badgeColor="purple"
                    pieColor="purple"
               />
            </Col>
            <Col lg={ 3 } md={ 6 }>
                <CardSystem
                    title="Number of forms completed"
                    badgeColor="success"
                    pieColor="success"
               />
            </Col>
            <Col lg={ 3 } md={ 6 }>
                <CardSystem
                    title="Number of shipped packages"
                    pieColor="yellow"
               />
            </Col>



            <Col lg={ 12 }>
                <div className="hr-text hr-text-center mt-4 mb-4">
                    <span>Details</span>
                </div>
            </Col>
            <Col lg={ 4 }>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-3">
                            Participants
                        </CardTitle>
                        <InputGroup>
                            <Input placeholder="Search Participants..." />
                            <InputGroupAddon addonType="append">
                                <Button color="secondary" outline tag={ Link } to="/apps/projects/list">
                                    <i className="fa fa-search"></i>
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </CardBody>
                    <DraggableProjects />
                </Card>
            </Col>
            <Col lg={ 8} >
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle className="mb-1 d-flex">
                            <h6>Recent form completions</h6>
                            <Button color="link" size="sm" className="pt-0 ml-auto">
                                View All <i className="fa fa-angle-right"></i>
                            </Button>
                        </CardTitle>
                    </CardBody>
                    <Table responsive striped className="mb-0">
                        <thead>
                            <tr>
                                <th className="bt-0">Email</th>
                                <th className="bt-0">Name</th>
                                <th className="bt-0">Date</th>
                                <th className="bt-0 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TrTableRecentFundings />
                        </tbody>
                    </Table>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default setupPage({
    pageTitle: 'Projects Dashboard'
})(ProjectsDashboard);