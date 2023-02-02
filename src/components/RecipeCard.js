import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';

const RecipeCard = ({ itemsList }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Zoom>
                        {itemsList.length >= 1 ? (itemsList.map((item) => {
                            return (
                                <Card className='my-3 d-flex flex-row'>
                                    <img src={item.imgUrl} className="card-image" />
                                    <Card.Body>
                                        <Card.Title className='d-flex justify-content-between'>
                                            <h3> {item.title} </h3>
                                            <span className='orange-color'>{item.price}</span>
                                        </Card.Title>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        })) : (<h3>لا يوجد وجبات الان </h3>)}
                    </Zoom>
                </Col>
            </Row>
        </Container>

    )
}

export default RecipeCard
