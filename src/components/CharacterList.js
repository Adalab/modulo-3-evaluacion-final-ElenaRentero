import '../styles/layout/CharacterList.scss';
import CharacterCard from "./CharacterCard";

function CharacterList({ charactersFiltered }) {
  const listOfCharacters = charactersFiltered.map((character) => {
    return <CharacterCard character={character} />;
  });
  return (
    <section className='characters'>
      <main className="characters__list">{listOfCharacters}</main>
    </section>
  );
}

export default CharacterList;
