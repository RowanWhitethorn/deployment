
import Carousel from "react-bootstrap/Carousel";

type CarouselStorageProps = {
  imgUrl: string;
};

export function CarouselStorage() {
  return (
    <Carousel className="carousel-body" fade>
      <Carousel.Item interval={2000} className="carrusel-item">
        <img className="carousel-img" src={"imgs/Servicios/Boletos.jpg"} />
      </Carousel.Item>

      <Carousel.Item interval={2000} className="carrusel-item">
        <img className="carousel-img" src={"/imgs/Servicios/Inmigracion.jpg"} />
      </Carousel.Item>

      <Carousel.Item interval={2000} className="carrusel-item">
        <img className="carousel-img" src={"/imgs/Servicios/Servicios Paralegales.jpg"} />
      </Carousel.Item>

      <Carousel.Item interval={2000} className="carrusel-item">
        <img className="carousel-img" src={"/imgs/Servicios/Pasaportes.jpg"} />
      </Carousel.Item>
    </Carousel>
  );
}

