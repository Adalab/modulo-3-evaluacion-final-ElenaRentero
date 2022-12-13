import { Link } from "react-router-dom";
import "../styles/layout/CharacterCard.scss";
import "../styles/core/Variables.scss";

function CharacterCard({ character }) {
  return (
    <article className="item" key={character.id}>
      <Link to={`/CharacterDetail/${character.id}`}>
        <img
          className="item__img"
          src={character.image}
          alt={`Foto de ${character.name}`}
          title={`Foto de ${character.name}`}
        ></img>
        <div className="item__info">
          <h4 className="item__info--name">{character.name}</h4>
          <p className="item__info--desc">{character.species}</p>
        </div>
      </Link>
    </article>
  );
}

export default CharacterCard;
