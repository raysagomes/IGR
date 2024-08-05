import React from "react";
import { Nav, Navbar, NavItem, Card, ListGroup } from "react-bootstrap"; 


function RightNavBar() {
    return (
    <> 
     <h2 className="h2-vocab"> Extra </h2>

<Card className="Card-right-nav-bar">
  
      <Card.Header>Featured</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item className="list-group-item">Gírias</ListGroup.Item>
        <ListGroup.Item className="list-group-item">Expressões populares</ListGroup.Item>
      </ListGroup>
    </Card>
    </> 
    );
}

    export default RightNavBar;