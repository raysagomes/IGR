import React from "react";
import { Card, ListGroup } from "react-bootstrap"; 
import { useNavigate } from "react-router-dom";

function RightNavBar() {
    const navigate = useNavigate();

    return (
        <> 
            <h2 className="h2-vocab"> Extra </h2>
            <Card className="Card-right-nav-bar">
                <Card.Header></Card.Header>
                <ListGroup variant="flush" className="lista-shadow">
                    <ListGroup.Item className="list-group-item" onClick={() => navigate('/extrapages/girias')}>Gírias</ListGroup.Item>
                    <ListGroup.Item className="list-group-item" onClick={() => navigate('/extrapages/expressoes-populares')}>Expressões populares</ListGroup.Item>
                    <ListGroup.Item className="list-group-item" onClick={() => navigate('/extrapages/frases-comuns')}>Frases comuns</ListGroup.Item>
                    <ListGroup.Item className="list-group-item" onClick={() => navigate('/extrapages/verbos-irregulares')}>Verbos irregulares</ListGroup.Item>
                </ListGroup>
            </Card>
        </> 
    );
}

export default RightNavBar;