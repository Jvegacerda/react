
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import CardPizza from './CardPizza';
import './home.css'
import { pizza } from '../src/data/pizzas';


export default function Home(props) {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    {pizza.map(item => (
                        <Col key={item.id} md={4} className="mb-4">
                            <CardPizza 
                                className='card' 
                                name={item.name} 
                                price={item.price} 
                                ingredients={item.ingredients} 
                                img={item.img} 
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

