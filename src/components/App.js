import { useEffect, useState } from "react";
import "../styles/App.scss";
import "../styles/core/Reset.scss";
import logo from '../images/header-img.png';
import fetchData from "../services/api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

function App() {
  // VARIABLES ESTADO
  const [allCharacters, setAllCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');

  // USEEFFECT
  useEffect(() => {
    fetchData().then((data) => {
      setAllCharacters(data);
    });
  }, []);

  const filterByName = (value) => {
    setFilterName(value);
  }

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR

  const charactersFiltered = allCharacters
    .filter((eachCharacter) => eachCharacter.name.toLowerCase().includes(filterName.toLowerCase()));

  //RETURN

  return (
    <div className="App">
      <header className="header">
        <img className="header__img" src={logo} alt="Rick and Morty" title="Rick and Morty"></img>
      </header>
      <Filters filterName={filterName} filterByName={filterByName} />
      {charactersFiltered.length > 0 ? <CharacterList charactersFiltered={charactersFiltered} /> : <h4 className="text">Ningún resultado coincide con su búsqueda.</h4>}
    </div>
  );
}

export default App;