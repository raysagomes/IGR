import React from "react";
import '../../style.css';
import { Container, Col, Row } from "react-bootstrap";
import RightNavBar from "../right-navbar";
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';


function LinksTextos() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2 className="h2-textos-links"> Textos </h2>
            <ListGroup as="ol" numbered className="colunasTexto">
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link to="/textos/texto1" className="text-decoration-none texto-link">
                    <div className="fw-bold">Luciana's dog, Max</div> </Link>
                </div>

              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"  >

                <div className="ms-2 me-auto">
                  <Link to="/textos/texto2" className="text-decoration-none texto-link">
                    <div className="fw-bold">The Joy of Baking </div> </Link>

                </div>

              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item" >

                <div className="ms-2 me-auto">
                  <Link to="/textos/texto3" className="text-decoration-none texto-link">
                    <div className="fw-bold">A Day at the Beach</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item" >

                <div className="ms-2 me-auto">
                  <Link to="/textos/texto4" className="text-decoration-none texto-link">
                    <div className="fw-bold">The Camping Trip</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item" >

                <div className="ms-2 me-auto">
                  <Link to="/textos/texto5" className="text-decoration-none texto-link">
                    <div className="fw-bold">A Rainy Day at Home</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item" >

                <div className="ms-2 me-auto">
                  <Link to="/textos/texto6" className="text-decoration-none texto-link">
                    <div className="fw-bold">A visit to the Zoo</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item" >

                <div className="ms-2 me-auto">
                  <Link to="/textos/texto7" className="text-decoration-none texto-link">
                    <div className="fw-bold">Tom Visits the Countryside</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item" >

                <div className="ms-2 me-auto">
                  <Link to="/textos/texto8" className="text-decoration-none texto-link">
                    <div className="fw-bold">A Carnival Adventure</div>
                  </Link>
                </div>
              </ListGroup.Item>
{/* 
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item" >

                <div className="ms-2 me-auto">
                  <Link to="/textos/texto9" className="text-decoration-none texto-link">
                    <div className="fw-bold">A visit to the Zoo</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item" >

                <div className="ms-2 me-auto">
                  <Link to="/textos/texto10" className="text-decoration-none texto-link">
                    <div className="fw-bold">A visit to the Zoo</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item" >

                <div className="ms-2 me-auto">
                  <Link to="/textos/texto11" className="text-decoration-none texto-link">
                    <div className="fw-bold">A visit to the Zoo</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item" >

                <div className="ms-2 me-auto">
                  <Link to="/textos/texto12" className="text-decoration-none texto-link">
                    <div className="fw-bold">A visit to the Zoo</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item" >

                <div className="ms-2 me-auto">
                  <Link to="/textos/texto13" className="text-decoration-none texto-link">
                    <div className="fw-bold">A visit to the Zoo</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item" >

                <div className="ms-2 me-auto">
                  <Link to="/textos/texto14" className="text-decoration-none texto-link">
                    <div className="fw-bold">A visit to the Zoo</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item" >

                <div className="ms-2 me-auto">
                  <Link to="/textos/texto15" className="text-decoration-none texto-link">
                    <div className="fw-bold">A visit to the Zoo</div>
                  </Link>
                </div>
              </ListGroup.Item> */}
              
            </ListGroup>
          </Col>
          <Col xs={12} md={3} className="extra-pagina-de-textos d-flex flex-column align-items-end">
            <RightNavBar />
          </Col>
        </Row>
      </Container>
    </>

  );
}

export default LinksTextos;
