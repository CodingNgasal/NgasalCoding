import { Navbar, Container, Nav } from "react-bootstrap";

const Navibar = () => {
    return(
        <Navbar>
            <Container>
                <Navbar.Brand>Pilem</Navbar.Brand>
                <Nav>
                    <Nav.Link>Notification</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navibar;