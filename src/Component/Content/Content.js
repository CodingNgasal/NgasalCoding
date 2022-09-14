import { Card, Col, Row } from "react-bootstrap"
import { Pagination } from "react-bootstrap";
import img1 from "../Poster/poster1.jpg";
import img2 from "../Poster/poster2.jpg";
import img3 from "../Poster/poster3.jpg";
import img4 from "../Poster/poster4.jpg";
import img5 from "../Poster/poster5.jpg";
import { Link, BrowserRouter } from "react-router-dom";
import Coba from "../Views/Coba";
const Content = () =>{
    return(
        <Row cla5sName="g-4">
          <Col>
          <BrowserRouter>
          <Link to={Coba}>
            <Card>
              <Card.Img variant="top" src={img1}  />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
              </Card.Body>
            </Card>
          </Link>
          </BrowserRouter>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={img4} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={img5} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
      </Row>  
       
    )
}

export default Content;