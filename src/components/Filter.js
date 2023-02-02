import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Filter = ({ filterCategory, uniqueCategory }) => {

    // filter category
    const onFilterCategory = (cat) => {
        filterCategory(cat)
    }
    return (
        <Container>
            <Row>
                <Col className='justify-content-center d-flex my-4'>
                    {uniqueCategory.length >= 1 ? (uniqueCategory.map(item=>{
                        return(
                            <Button onClick={() => onFilterCategory(item)} className='bg-transparent border text-black mx-2'>{item}</Button>
                        )
                    })): null}
                </Col>
            </Row>
        </Container>

    )
}

export default Filter
