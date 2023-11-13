import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function SocialMediaIcons() {
  return (
    <div className="social-icons-div">
      <a
        href="https://www.instagram.com/vueloscaribe/?hl=es"
        target="_blank"
        className="instagram social f-icon"
        title="Instagram: @vueloscaribe"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/vueloscaribeymas/"
        target="_blank"
        className="facebook social f-icon"
        title="Facebook: vueloscaribeymas"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://www.tiktok.com/@vueloscaribe"
        target="_blank"
        className="tiktok social f-icon"
        title="TikTok: @vueloscaribe"
      >
        <FontAwesomeIcon icon={faTiktok} size="2x" />
      </a>
    </div>
  );
}

export default SocialMediaIcons;
