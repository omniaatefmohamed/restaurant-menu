import React, { useState } from 'react'
import { Button, Container, Form, Navbar } from 'react-bootstrap'

const NavbarComp = ({ Searchbyinput }) => {
    const [inputValue, setInputValue] = useState("")
    const onSearch = () => {
        Searchbyinput(inputValue);
        setInputValue("")
    }
    return (
        <Navbar bg="dark" expand="lg" className='py-3'>
            <Container>
                <Navbar.Brand href="#" className='text-white'>مطعم</Navbar.Brand>
                <Form className="d-flex me-auto">
                    <Form.Control
                        type="search"
                        placeholder="بحث ..."
                        className="mx-3"
                        aria-label="Search"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                    />
                    <Button variant="warning" onClick={() => onSearch()}>بحث</Button>
                </Form>
            </Container>
        </Navbar>
    )
}

export default NavbarComp
