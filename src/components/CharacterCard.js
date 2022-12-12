import "../styles/layout/CharacterCard.scss";
import "../styles/core/Variables.scss";

function CharacterCard({ character }) {
  debugger
  return (
    <li className="item" key={character.id}>
      <div className="item__container">
        <img
          className="item__container--img"
          src={character.image}
          alt={`Foto de ${character.name}`}
          title={`Foto de ${character.name}`}
        ></img>
      </div>
      <div className="item__info">
        <h4 className="item__info--name">{character.name}</h4>
        <p className="item__info--desc">{character.species}</p>
      </div>
    </li>
  );
}

export default CharacterCard;
