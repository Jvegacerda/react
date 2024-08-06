import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardPizza(props) {
  return (
    <>
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <hr />
        <h6>Ingredientes</h6>
        <Card.Text>🍕 {props.ingredients}</Card.Text>
        <hr />
        <h5 className='ms-5'> Precio: ${props.price}</h5>
        <Button variant="outline-dark" className="ms-5">Ver Más 👀</Button>
        <Button variant="dark" className="ms-5">Añadir 🛒</Button>
      </Card.Body>
    </Card>
    </>
  )
}
