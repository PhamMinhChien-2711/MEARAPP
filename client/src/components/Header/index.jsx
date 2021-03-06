import { AllOutSharp, SearchOutlined } from '@mui/icons-material';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { Col, Container, Row, InputGroupAddon, Input, InputGroup, Button } from 'reactstrap';
import './index.scss';
import logo from '../../assets/logo.jpg';
import headImg from '../../assets/headimg.png';
import user from '../../assets/user.jpg';
import { Avatar, IconButton } from '@mui/material';

const active = {
    fontWeight: 'bold',
    borderBottom: 'solid 3px black'
}

function Header(props) {
    return (

        <div className='Header'>
            <Container>
                <Row className='Header-row'>
                    <Col xs='12' sm='12' md='12' lg='6' className='Header-col-1'>
                        <img src={logo} alt='logo snpo' />
                        <NavLink activeStyle={active} className='Header-col-1-link' exact to='/home' >Trang chủ</NavLink>
                        <NavLink activeStyle={active} className='Header-col-1-link' to='/hoidap' >Hỏi đáp</NavLink>
                        <NavLink activeStyle={active} className='Header-col-1-link' to='/cuutro' >Cứu trợ</NavLink>
                        <NavLink activeStyle={active} className='Header-col-1-link' to='/shop' >Shop</NavLink>
                    </Col>
                    <Col xs='12' sm='12' md='12' lg='4' className='Header-col-2'>
                        <InputGroup>
                            <Input />
                            <InputGroupAddon addonType="append">
                                <Button color="primary">Search <SearchOutlined /></Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                    <Col xs='12' sm='12' md='12' lg='2' className='Header-col-3'>
                        <NavLink to='/user'>
                            <Avatar
                                className='img'
                                alt="Remy Sharp"
                                src={user}
                                sx={{ width: 56, height: 50 }}
                            />
                        </NavLink>
                        <IconButton endIcon={<AllOutSharp />}><i class="fas fa-sign-out-alt"></i></IconButton>
                    </Col>
                </Row>
            </Container>
            <Row className='Header-row-2'><img style={{ width: '100%' }} src={headImg} alt='head img' /></Row>
        </div>

    );
}

export default Header;