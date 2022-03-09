import React from 'react'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap'


var row = 0;
var col = 0;
var cell = [
    ['A','__','__','__','__'],
    ['__','__','__','__','__'],
    ['__','__','__','__','__'],
    ['__','__','__','__','__'],
    ['__','__','__','__','__']
]
;

document.addEventListener('keydown', (event) =>
{
    var character = event.key.toUpperCase();
    cell[0][0] = character;
    col+=1;
})




function Grid(){
   

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
                        <Button variant="outline-dark" disabled>{cell[0][0]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[0][1]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[0][2]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[0][3]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[0][4]}</Button>{' '}
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col lg="auto">
                    <div class='btn-group'>
                        <Button variant="outline-dark" disabled>{cell[1][0]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[1][1]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[1][2]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[1][3]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[1][4]}</Button>{' '}
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-md-center">
            <Col lg="auto">
                    <div class='btn-group'>
                        <Button variant="outline-dark" disabled>{cell[2][0]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[2][1]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[2][2]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[2][3]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[2][4]}</Button>{' '}
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col lg="auto">
                    <div class='btn-group'>
                        <Button variant="outline-dark" disabled>{cell[3][0]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[3][1]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[3][2]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[3][3]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[3][4]}</Button>{' '}
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col lg="auto">
                    <div class='btn-group'>
                        <Button variant="outline-dark" disabled>{cell[4][0]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[4][1]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[4][2]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[4][3]}</Button>{' '}
                        <Button variant="outline-dark" disabled>{cell[4][4]}</Button>{' '}
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