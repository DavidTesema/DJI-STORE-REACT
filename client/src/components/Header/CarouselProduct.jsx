import React from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselProduct() {
  return (
    <Carousel fade>
      <Carousel.Item className="header-carousel">
        <Carousel.Caption>
          <h3>MATRICE 300</h3>
          <p>A New Flagship for Digital Agriculture</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="header-carousel">
        <Carousel.Caption>
          <h3>Dji Mavic 3</h3>
          <p>Power in Portability</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="header-carousel">
        <Carousel.Caption>
          <h3>DJI AVATA</h3>
          <p>Born to Fly</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselProduct;
