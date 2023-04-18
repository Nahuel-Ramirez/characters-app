import propTypes from "prop-types";
import { Row } from "react-bootstrap";
import Character from "../Character/Character";

const Characters = ({ characters }) => {
  return (
    <Row className="justify-content-center">
      {characters?.length > 0 &&
        characters.map((character) => {
          return <Character {...character} />;
        })}
    </Row>
  );
};

Characters.propTypes = {
  characters: propTypes.arrayOf(
    propTypes.shape({
      created: propTypes.string,
      gender: propTypes.string,
      id: propTypes.number,
      name: propTypes.string,
      species: propTypes.string,
      status: propTypes.string,
    })
  ),
};

export default Characters;
