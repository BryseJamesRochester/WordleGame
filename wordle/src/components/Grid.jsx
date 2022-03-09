import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap'





function Grid(){
    var cell = [
        ['','','','',''],
        ['_','_','_','_','_'],
        ['_','_','_','_','_'],
        ['_','_','_','_','_'],
        ['_','_','_','_','_']
    ]
    ;

    const resetGrid = () =>
    {
        console.log("reset clicked");
        var i = 0;
        for(i=0;i<cell.length;i++){
            cell[i] = "_";
        }
    }

    return(
        <div>
            <Container>
            <Row className="justify-content-md-center">
            <Col lg="auto">
                    <div class='btn-group'>
                        <Button variant="outline-dark" disabled>{cell[0,0]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[0,1]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[0,2]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[0,3]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[0,4]}</Button>{' '}
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col lg="auto">
                    <div class='btn-group'>
                        <Button variant="outline-dark" disabled>{cell[5]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[6]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[7]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[8]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[9]}</Button>{' '}
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-md-center">
            <Col lg="auto">
                    <div class='btn-group'>
                        <Button variant="outline-dark" disabled>{cell[10]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[11]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[12]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[13]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[14]}</Button>{' '}
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col lg="auto">
                    <div class='btn-group'>
                        <Button variant="outline-dark" disabled>{cell[15]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[16]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[17]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[18]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[19]}</Button>{' '}
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col lg="auto">
                    <div class='btn-group'>
                        <Button variant="outline-dark" disabled>{cell[20]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[21]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[22]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[23]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[24]}</Button>{' '}
                    </div>
                </Col>
            </Row>
            <Button className="justify-content-md-center" variant="success" onClick={resetGrid}>Reset</Button>
            <Row className="justify-content-md-center">
            <pre>


            </pre>
            </Row>

            </Container>
               


        </div>
    )
}


export default Grid