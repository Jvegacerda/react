import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; 
import { cartPizza } from '../src/data/pizzas';

function Cart() {
  const [totalProduct, setTotalProduct] = useState(cartPizza);

// +pizza
  const aumentarPizza = (id) => {setTotalProduct(totalProduct.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item )); };

// -pizza
  const disminuirPizza = (id) => {
    setTotalProduct(totalProduct.map(item => 
      item.id === id && item.count > 0 ? { ...item, count: item.count - 1 } : item )); };

  // total
  const totalAmount = totalProduct.reduce((total, item) => total + item.price * item.count, 0);

  // nombre y cantidad de pizzas al total
  const purchasedPizzas = totalProduct
  .filter(item => item.count > 0)
  .map(item => (
    <li key={item.id}>
      {item.name} ({item.count}) - ${item.price * item.count}
    </li>
  ));

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Carrito de compras</h2>
      <h1 className="mb-4">Pizzas</h1>
      <Row>
        {totalProduct.map((item) => (
          <Col key={item.id} md={2} className="mb-4 d-flex">
            <div className="card p-3 text-center">
              <img src={item.img} alt={item.name} className="card-img-top mb-3" />
              <h3 className="card-title">{item.name}</h3>
              <p className="card-text">Precio: ${item.price}</p>
              <div className="d-flex justify-content-center">
                
                <Button variant="primary" className="mx-2" onClick={() => aumentarPizza(item.id)}> + </Button>
                <Button variant="secondary" className="mx-2" onClick={() => disminuirPizza(item.id)}> - </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <h3 className="mt-2">Pizzas:</h3>
      <ul>
        {purchasedPizzas.length > 0 ? purchasedPizzas : <li >Sin pizzas en el carrito</li>}
      </ul>
      <h2 className="mt-4">Monto total: $ {totalAmount}</h2>
      <Button className="mt-4" variant="success">🛒 Comprar</Button>
    </div>
  );
}

export default Cart;