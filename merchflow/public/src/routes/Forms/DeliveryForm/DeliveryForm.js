/* eslint-disable */
import React from 'react';
import MaskedInput from 'react-text-mask'
import {
    createAutoCorrectedDatePipe,
    createNumberMask,
    emailMask
} from 'text-mask-addons';

import {
    Row,
    Card,
    CardBody,
    Container,
    Col,
    FormGroup,
    Label,
    Table,
    CustomInput,
    Input,
     InputGroup,
    InputGroupAddon,
    Badge
} from '../../../components';

import { HeaderMain } from "../../components/HeaderMain";
import { HeaderDemo } from "../../components/HeaderDemo";

import Toggle from 'react-toggle';

import classes from './../Toggles/Toggles.scss';

const autoCorrectedDatePipe = createAutoCorrectedDatePipe('mm/dd/yyyy');
const dolarsMask = createNumberMask({ prefix: '$' });
const dolarsMaskDecimal = createNumberMask({ prefix: '$', allowDecimal: true });
const percentageMask = createNumberMask({ prefix: '', suffix: '%', integerLimit: 3 });
const upperCasePipe = conformedValue => conformedValue.toUpperCase();

export const DeliveryForm = () => (
    <Container>
        <HeaderMain 
            title="Merch delivery form"
            className="mb-4 mt-4"
        />
        <p className="mb-3">
            This is the merchandise delivery form that your event participants will receive when you send them the invitation. 
        </p>
        <div className="hr-text hr-text-center mt-5 mb-4">
        </div>
        <HeaderDemo 
            no={1} 
            title="Basic Information" 
            className="mt-5"
            subTitle={(
                <React.Fragment>
                    Fill out basic information for shipping merch to you!
                </React.Fragment>
            )}
        />
        <Card>
            <CardBody>
                <Row>
                    <Col lg={ 4 }>
                        <FormGroup>
                            <Label for="firstName">
                                First Name
                                <span className="small ml-1 text-muted">
                                    for shipping
                                </span>
                            </Label>
                            <Input
                                placeholder='Ex. Andrew'
                                id="firstName"
                            />
                        </FormGroup>
                    </Col>
                    <Col lg={ 4 }>
                        <FormGroup>
                            <Label for="lastName">
                                Last Name
                                <span className="small ml-1 text-muted">
                                    for shipping
                                </span>
                            </Label>
                            <Input
                                placeholder='Ex. Carnegie'
                                id="lastName"
                            />
                        </FormGroup>
                    </Col>
                    <Col lg={2}>
                        <FormGroup >
                            <Label for="titleSelect">
                                Title
                                <span className="small ml-1 text-muted">for shipping</span>
                            </Label>
                                <Input 
                                    type="select" 
                                    name="select" 
                                    id="titleSelect" 
                                >
                                    <option defaultValue="">Select option</option>
                                    <option>Ms</option>
                                    <option>Mr</option>
                                    <option>Mrs</option>
                                </Input>
                        </FormGroup>
                    </Col>
                    <Col lg={2}>
                        <FormGroup>
                            <Label for="suffixSelect">
                                Suffix
                                <span className="small ml-1 text-muted">for shipping</span>
                            </Label>
                                <Input 
                                    type="select" 
                                    name="select" 
                                    id="titleSelect" 
                                >
                                    <option defaultValue="">Select option</option>
                                    <option>Jr.</option>
                                    <option>Sr.</option>
                                </Input>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col lg={ 4 }>
                        <FormGroup>
                            <Label for="streetAddress">
                                Street Address
                                <span className="small ml-1 text-muted">
                                    U.S. only
                                </span>
                            </Label>
                            <Input
                                placeholder='Ex. 5032 Forbes Avenue S6064'
                                id="streetAddress"
                            />
                        </FormGroup>
                    </Col>
                    <Col lg={ 4 }>
                        <FormGroup>
                            <Label for="streetAddress">
                                City
                                <span className="small ml-1 text-muted">
                                    U.S. only
                                </span>
                            </Label>
                            <Input
                                placeholder='Ex. Pittsburgh'
                                id="streetAddress"
                            />
                        </FormGroup>
                    </Col>
                    <Col lg={ 4 }>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="streetAddress">
                                Region
                                <span className="small ml-1 text-muted">
                                    U.S. only
                                </span>
                            </Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    State
                                </InputGroupAddon>
                                <CustomInput type="select" id="country-selector-3" name="customSelect">
                                    <option value="">Select...</option>
                                    <option>Arizona</option>
                                    <option>Alaska</option>
                                    <option>Arizona</option>
                                    <option>Arkansas</option>
                                    <option>California</option>
                                    <option>Colorado</option>
                                    <option>Connecticut</option>
                                    <option>Delaware</option>
                                    <option>Florida</option>
                                    <option>Georgia</option>
                                    <option>Hawaii</option>
                                    <option>Idaho</option>
                                    <option>Illinois</option>
                                    <option>Indiana</option>
                                    <option>Iowa</option>
                                    <option>Kansas</option>
                                    <option>Kentucky</option>
                                    <option>Louisiana</option>
                                    <option>Maine</option>
                                    <option>Maryland</option>
                                </CustomInput>
                            </InputGroup>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col lg={ 4 }>
                        <FormGroup>
                            <Label for="uSZipCode">
                                US Zip Code
                                <span className="small ml-1 text-muted">
                                </span>
                            </Label>
                            <Input
                                mask={ [/[1-9]/, /\d/, /\d/, /\d/, /\d/] }
                                placeholder='94303'
                                tag={ MaskedInput }
                                id="uSZipCode"
                            />
                        </FormGroup>
                    </Col>
                    <Col lg={ 4 }>
                        <FormGroup>
                            <Label for="uSPhoneNumber">
                                US Phone Number
                                <span className="small ml-1 text-muted">
                                </span>
                            </Label>
                            <Input
                                mask={ ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/] }
                                placeholder='(555) 495-3947'
                                tag={ MaskedInput }
                                id="uSPhoneNumber"
                            />
                        </FormGroup>
                    </Col>

                    <Col lg={ 4 }>
                        <FormGroup>
                            <Label for="email">
                                Email
                                <span className="small ml-1 text-muted">
                                    - Enter the same email you received invite code in
                                </span>
                            </Label>
                            <Input
                                mask={ emailMask }
                                placeholder='john@smith.com'
                                tag={ MaskedInput }
                                id="email"
                            />
                        </FormGroup>
                    </Col>
                </Row>      
            </CardBody>
        </Card>

        <HeaderDemo 
            no={2} 
            title="Merch distribution" 
            className="mt-5"
            subTitle={(
                <React.Fragment>
                    Help others get their merch faster!
                </React.Fragment>
            )}
        />
        <Card>
            <CardBody>
                <Row>
                    <Col lg={12}>
                        <Label>
                            The event planners have indicated that those who are willing to help distribute merch will receive:
                        </Label>
                        <Badge color="info" pill className="align-self-center ml-2">
                             Priority shipment
                        </Badge>
                        <Badge color="primary" pill className="align-self-center ml-2">
                             Merch guarantee
                        </Badge>
                        <Badge color="danger" pill className="align-self-center ml-2">
                             Bonus merch
                        </Badge>
                    </Col>

                </Row>
                <Row>
                    <Col lg={12}>
                        <Label>
                        </Label>
                    </Col>

                </Row>
                <Row>
                <Col lg={6}>
                    <Label for="email">
                        Are you willing to help distribute merch?
                        <span className="small ml-1 text-muted">
                            Checking this box means that you are willing to distribute merch to others in the range you input within 72 hours of receiving your package. However, depending on demand, you may or may not actually receive the request to distribute merch. 
                        </span>
                    </Label>
                    <FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox"/>{' '}
                                Yes!
                            </Label>
                        </FormGroup>
                    </FormGroup>
                </Col>
                <Col lg={6}>
                    <Label for="email">
                        Radius (mi) willing to delivery
                        <span className="small ml-1 text-muted">
                            <br></br>Enter"0" if you are unwilling to help distribute merch. The number entered here will be the guaranteed maximum miles you will need to travel in order to distribute another participant's merchandise.
                        </span>
                    </Label>
                    <Input
                        placeholder='Ex. 1'
                        id="streetAddress"
                    />
                </Col>

                </Row>
            </CardBody>
        </Card>


        <HeaderDemo 
            no={3} 
            title="Notes & Feedback" 
            className="mt-5"
            subTitle={(
                <React.Fragment>
                    Let us know if you need any accomodations or have any feedback for us!
                </React.Fragment>
            )}
        />
        <Card>
            <CardBody>
                    <FormGroup row>
                        <Label for="textArea" sm={3}>
                            Free form text area. Feel free to drop anything you'd like us to know here.
                        </Label>
                        <Col sm={9}>
                            <Input 
                                type="textarea" 
                                name="text" 
                                id="textArea" 
                                placeholder="Enter text..." 
                            />
                        </Col>
                    </FormGroup>
            </CardBody>
        </Card>
    </Container>
);
