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
                  <Link
                    to="/textos/texto1"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">Luciana's dog, Max</div>{" "}
                  </Link>
                </div>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto2"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">The Joy of Baking </div>{" "}
                  </Link>
                </div>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto3"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">A Day at the Beach</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto4"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">The Camping Trip</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto5"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">A Rainy Day at Home</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto6"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">A visit to the Zoo</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto7"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">Tom Visits the Countryside</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto8"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">A Carnival Adventure</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto9"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">Efeito Borboleta</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto10"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">O grande Gatsby</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto11"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">
                      Jornada de Joana para a Faculdade
                    </div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto12"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">Chef Lucas</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto13"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">
                      Sofia's Path to Becoming a Software Engineer
                    </div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto14"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">The Story of Monster House</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto15"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">Emma's Summer Adventure</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto16"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">Maria's First Day at Work</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto17"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">The Library Adventure</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto18"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">The Cooking Disaster</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto19"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">The Lost Phone Mystery</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto20"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">The Unexpected Friendship</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto21"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">The Art Class Surprise</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto22"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">The Midnight Grocery Run</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto23"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">The Power Outage Adventure</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto24"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">The Wedding Photographer's Challenge</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto25"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">The Community Garden Project</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto26"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">The Vintage Bookstore Discovery</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto27"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">The Dance Class Surprise</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto28"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">The Food Truck Adventure</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto29"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">The Volunteer Experience</div>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3 lista-item"
              >
                <div className="ms-2 me-auto">
                  <Link
                    to="/textos/texto30"
                    className="text-decoration-none texto-link"
                  >
                    <div className="fw-bold">The Music Festival Experience</div>
                  </Link>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col
            xs={12}
            md={3}
            className="extra-pagina-de-textos d-flex flex-column align-items-end"
          >
            <RightNavBar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LinksTextos;
