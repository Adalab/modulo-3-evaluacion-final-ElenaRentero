import '../styles/layout/CharacterList.scss';
import CharacterCard from "./CharacterCard";

function CharacterList({ allCharacters }) {
  const listOfCharacters = allCharacters.map((character) => {
    return <CharacterCard character={character} />;
  });
  return (
    <section className='characters'>
      <ul className="characters__list">{listOfCharacters}</ul>
    </section>
  );
}

export default CharacterList;
