import { memo, useState } from "react";
import propTypes from "prop-types";

import { InputGroup, FormControl, Form, Button } from "react-bootstrap";

const Search = ({ findCharacter }) => {
  const [character, setCharacter] = useState("");

  const getCharacters = (e) => {
    e.preventDefault();
    //Inputs controlados(Tienen referencias en tiempo real, dependen de un state)
    //vs Inputs no controlados(no real time, no controlados por estados)
    //const [character] = e.target.elements;
    findCharacter(character);
  };

  return (
    <Form onSubmit={getCharacters} className="search-character__input">
      <InputGroup>
        <FormControl
          placeholder="Personaje..."
          onChange={(e) => {
            setCharacter(e.target.value);
          }}
          value={character}
          name="character"
        ></FormControl>
        <Button type="submit">Buscar</Button>
      </InputGroup>
    </Form>
  );
};

Search.propTypes = {
  findeCharacter: propTypes.func.isRequired,
};

export default memo(Search);
