import { Link } from "react-router-dom";
import "../styles/layout/CharacterDetail.scss";

function UserDetail({ character }) {
  return (
    <div className="container">
      <div className="container__link">
        <Link className="container__link--info" to={"/"}> <i className="fa-solid fa-backward"></i> Volver</Link>
      </div>
      <article className="article" key={character.id}>
        <div className="article__card">
          <div className="article__card__user">
            <img
              src={character.image}
              alt={`Foto de ${character.name}`}
              title={`Foto de ${character.name}`}
            ></img>
          </div>
          <div className="article__card__info">
            <ul className="article__card__info--element">
              <li className="element-name">{character.name}</li>
              <li className="element">Status: {character.status} {character.status === 'Alive' ? <i className="fa-solid fa-wave-pulse"></i> : <i className="fa-solid fa-skull-crossbones"></i>}</li>
              <li className="element">Species: {character.species}</li>
              <li className="element">Origin: {character.origin}</li>
              <li className="element">Episodes: {character.episode.length}</li>
            </ul>
          </div>
        </div>
        <div className="article__card__general">
          <h1>{character.name}</h1>
          <span className="article__card__general--more">
            Pasa por encima para obtener más información
          </span>
        </div>
      </article>
    </div>
  );
}

export default UserDetail;
