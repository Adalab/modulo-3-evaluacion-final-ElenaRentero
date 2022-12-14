import { Link } from "react-router-dom";
import "../styles/layout/PageNotFound.scss";

function PageNotFound() {
  return (
    <div className="characterContainer">
      <section className="section__intro">
        <h2 className="section__intro--title">Ops!!! Página no encontrada</h2>
        <Link className="container__link--info" to={"/"}>
          {" "}
          <i className="fa-solid fa-backward"></i> Volver a inicio{" "}
        </Link>
      </section>
      <section className="section__info">
        <img
          className="section__info--img"
          src="https://cdn.player.one/sites/player.one/files/2018/01/30/morty-state-rick-season-4.png"
          alt="Morty crying"
        ></img>
      </section>
    </div>
  );
}
export default PageNotFound;
