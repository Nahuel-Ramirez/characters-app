import propTypes from "prop-types";
import { Col, Card, Button } from "react-bootstrap";

const Character = ({ id, name, image, status, species, created }) => {
  return (
    <Col md={4} sm={12} className="character__separation" key={id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>Especie: {species}</p>
            <p>Estado: {status}</p>
            <p>Creacion: {created}</p>
          </Card.Text>
          <Button variant="primary">Go {id}</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

Character.propTypes = {
  character: propTypes.shape({
    created: propTypes.string,
    gender: propTypes.string,
    id: propTypes.number,
    name: propTypes.string,
    species: propTypes.string,
    status: propTypes.string,
  }).isRequired,
};

export default Character;
