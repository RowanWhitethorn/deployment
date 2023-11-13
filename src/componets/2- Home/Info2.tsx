import React, { useState } from "react";
import { Navbar, Nav, NavItem, Carousel } from "react-bootstrap";
import SocialMediaIcons from "../1- General/SocialMediaIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

interface Card {
  title: string;
  content: React.ReactNode;
}

export default function Info() {
  const [activeCard, setActiveCard] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const cards: Card[] = [
    {
      title: "Contactos",
      content: (
        <div className="card-body">
          <span className="contacts-span">
            <FontAwesomeIcon icon={faPhone} /> (786) 865-5615
          </span>
          <span className="contacts-span">
            <FontAwesomeIcon icon={faEnvelope} /> vueloscaribe19@gmail.com
          </span>

          <p>Redes Sociales:</p>
          <div className="socilal-links text-center">
            <SocialMediaIcons />
          </div>
        </div>
      ),
    },
    // another card
    {
      title: "Direcciones",
      content: (
        <div className="card-body">
          <a
            className="ms-2 custom-link"
            href="https://www.google.com/maps/place/Vuelos+Caribe/@25.833829,-80.3001194,15z/data=!4m6!3m5!1s0x88d9bbee8cce6ba7:0xf66137cafed423c4!8m2!3d25.825207!4d-80.2792801!16s%2Fg%2F11h3jstyj6"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLocationDot} />
            363 E 1st Ave, Hialeah, FL 33010
          </a>

          <a
            className="ms-2 custom-link"
            href="https://www.google.com/maps/place/1665+W+68th+St,+Hialeah,+FL+33014/@25.8848382,-80.3167136,20z/data=!4m6!3m5!1s0x88d9bade64d0eef1:0x77a57c7019511151!8m2!3d25.8849114!4d-80.3164781!16s%2Fg%2F11b8v6twns"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLocationDot} />
            1665 W 68th St #105, Hialeah,FL 33014
          </a>
          <b>Redes Sociales:</b>
          <div className="socilal-links text-center">
            <SocialMediaIcons />
          </div>
        </div>
      ),
    },

    //another card
    {
      title: "Horarios",
      content: (
        <div className="card-body">
          <span>
            <b> De Lunes a Viernes:</b> 10:00 AM - 6:00 PM
          </span>
          <span>
            <b>Sábados:</b> 9:00 AM - 5:00 PM
          </span>
          <b>Redes Sociales:</b>
          <div className="socilal-links text-center">
            <SocialMediaIcons />
          </div>
        </div>
      ),
    },
  ];

  const handleCardClick = (index: number) => {
    setActiveCard(index);
    setCarouselIndex(index);
  };

  return (
    <>
      <div className="info-container">
        <div className="info-div">
          <div className="header-slogan"> "viaja, disfruta, vive!"</div>

          <Navbar expand="lg" className="info-nav">
            {cards.map((card, index) => (
              <NavItem
                key={index}
                className={`info-menu ${activeCard === index ? "active" : ""}`}
              >
                <Nav.Link
                  className="info-button"
                  onClick={() => handleCardClick(index)}
                >
                  {card.title}
                </Nav.Link>
              </NavItem>
            ))}
          </Navbar>

          <Carousel
            activeIndex={carouselIndex}
            onSelect={() => {}}
            nextIcon={null}
            prevIcon={null}
            indicators={false}
            controls={false}
            className="info-carousel"
          >
            {cards.map((card, index) => (
              <Carousel.Item key={index} className="card-info">
                <p className="card-body">{card.content}</p>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}
