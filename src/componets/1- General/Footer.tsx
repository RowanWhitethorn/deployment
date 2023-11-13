import SocialMediaIcons from "./SocialMediaIcon";
import UsefulInfo from "../5- FAQ/UsefulInfo";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-first-text">
        Gracias por visitar nuestra pagina!
      </div>
      <div className="footer-items row">
        <div className="column">
          <div className="component-div">
            <p className="footer-text"> Siganos y mantengase actualizado</p>
            <SocialMediaIcons />
          </div>
        </div>
        <div className="column">
          <UsefulInfo />
        </div>
      </div>
    </div>
  );
}
