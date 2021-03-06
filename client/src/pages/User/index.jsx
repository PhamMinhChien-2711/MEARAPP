import React from 'react';
import './index.scss';
import user from '../../assets/user.jpg';
import { Button, Col, Container, Row } from 'reactstrap';
function User(props) {
    return (
        <div className='User'>
            <Container >
                <Row>
                    <Col lg='2'> </Col>
                    <Col lg='4'>
                        <img src={user} alt='' />
                    </Col>
                    <Col lg='6' className='User-infor'>
                        <h4>Your Information </h4>
                        <table>
                            <tr>
                                <td>FullName: </td>
                                <td>Nhat Long Dang</td>
                            </tr>
                            <tr>
                                <td>Email: </td>
                                <td>contact @abc.com</td>
                            </tr>
                            <tr>
                                <td>Phone: </td>
                                <td>+13 4131 14112</td>
                            </tr><br />
                            <tr>
                                <Button varriant='contained'>Change your password</Button>
                            </tr>
                        </table>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default User;