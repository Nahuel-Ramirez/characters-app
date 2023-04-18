import { useState } from "react";
import "../src/App.scss";
import { useFetch } from "./hooks/useFetch";
import Characters from "./components/Characters/Characters";
import { Container } from "react-bootstrap";
import Loading from "./components/Common/Loading";
import Search from "./components/Search/Search";

function App() {
  const [endpoint, setEndpoint] = useState("character");
  const { data, loading, error } = useFetch(endpoint);
  const { results: characters, info } = data;

  const findCharacter = (character) => {
    setEndpoint(`character?name=${character}`);
  };

  if (loading) return <Loading />;
  if (error) return <h3>Ocurrio un error...</h3>;

  return (
    <Container className="App">
      <Search findCharacter={findCharacter} />
      <Characters characters={characters} />
    </Container>
  );
}

export default App;
