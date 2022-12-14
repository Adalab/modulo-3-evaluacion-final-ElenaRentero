import { Link, useParams } from "react-router-dom";
import "../../styles/layout/CharacterDetail.scss";
import PageNotFound from "../PageNotFound";

function UserDetail({ character }) {
  const params = useParams();
  const characterFound = character(params.id);

if (characterFound === undefined){
  return <PageNotFound />
} else {
  return (
    <div className="container">
      <div className="container__link">
        <Link className="container__link--info" to={"/"}> <i className="fa-solid fa-backward"></i> Volver</Link>
      </div>
      <article className="article" key={characterFound.id}>
        <div className="article__card">
          <div className="article__card__user">
            <img
              className="img"
              src={characterFound.image}
              alt={`Foto de ${characterFound.name}`}
              title={`Foto de ${characterFound.name}`}
            ></img>
          </div>
          <div className="article__card__info">
            <ul className="article__card__info--element">
              <li className="element-name">{characterFound.name}</li>
              <li className="element">Status: {characterFound.status} {character.status === 'Alive' ? <i class="fa-solid fa-heart-pulse"></i> : <i className="fa-solid fa-skull-crossbones"></i>}</li>
              <li className="element">Species: {characterFound.species} {character.species === 'Alien' ? <i class="fa-brands fa-discord"></i> : <i class="fa-solid fa-person"></i>}</li>
              <li className="element">Origin: {characterFound.origin}</li>
              <li className="element">Episodes: {characterFound.episode.length}</li>
            </ul>
          </div>
        </div>
        <div className="article__card__general">
          <h1>{characterFound.name}</h1>
          <span className="article__card__general--more">
            Pasa por encima para obtener más información
          </span>
        </div>
      </article>
    </div>
  );
}
}

export default UserDetail;
