import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SignIn extends Component {
    render() {
        return (
            <div className="bg-img">
                <Form className="form">
                    <FormGroup className="wrapper" style={{ margin: 0 }}>
                        <FormGroup className="logo-form">
                            <Label className="logo">React JS</Label>
                        </FormGroup>
                        <FormGroup>
                            <Input
                                className="input-text"
                                type="Username"
                                name="User"
                                id="exampleUser"
                                placeholder="Username"
                                style={{ fontSize: 14 }}/>
                            <Input
                                className="input-text"
                                type="Password" name="Password"
                                id="examplePassword"
                                placeholder="Password"
                                style={{ fontSize: 14 }}/>
                            <Label className="input-text-check">
                                <FormGroup className="checkbox-wrapper">
                                    <Label className="checkbox">
                                        <input type="checkbox" className="checkbox-input" value="on" />
                                    </Label>
                                    <Label className="checkbox-text">
                                        Remember me
                                </Label>
                                    <Label className="button">
                                        <Button className="btn-primary-button" color="primary">Sign in</Button>
                                    </Label>
                                </FormGroup>
                            </Label>
                            <FormText style={{ marginBottom: 15 }}>
                            </FormText>
                            <Label className="color">----------------------------------------------------------------------</Label>
                            <Button className="button-block-1" color="" block style={{fontSize: 15}}>Sign in with Facebook</Button>
                            <Button className="button-block-2" color="" block style={{ fontSize: 15 }}>Sign in with Google Plus</Button>
                            <Button className="button-block-3" color="" block style={{ fontSize: 15 }}>Sign in with Auth0</Button>
                            <Button className="button-block-4" color="" block style={{fontSize: 15}}>Sign in with Firebase</Button>
                        </FormGroup>
                        <FormGroup>
                            <FormText className="forgot">
                                Forgot password
                            </FormText>
                            <FormText className="creat-account" >
                                Create an React JS account
                            </FormText>
                        </FormGroup>
                    </FormGroup>
                </Form>
            </div> 
        );
    }
}

export default SignIn;