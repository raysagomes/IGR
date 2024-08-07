import React from "react";
import { Nav, Navbar, NavItem, Card, ListGroup } from "react-bootstrap"; 
import { Link } from "react-router-dom";

function RightNavBar() {
    return (
    <> 
     <h2 className="h2-vocab"> Extra </h2>

<Card className="Card-right-nav-bar">
  
      <Card.Header></Card.Header>
      <ListGroup variant="flush">
      <Link to="/girias" className="text-decoration-none texto-link">   <ListGroup.Item className="list-group-item">Gírias</ListGroup.Item> </Link>
      <Link to="/expressoes-populares" className="text-decoration-none texto-link">   <ListGroup.Item className="list-group-item">Expressões populares</ListGroup.Item> </Link>
      </ListGroup>
    </Card>
    </> 
    );
}

    export default RightNavBar;