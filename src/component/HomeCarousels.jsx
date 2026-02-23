import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import "./HomeCarousel.css"

function HomeCarousels() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src='/carousels/slide01.avif' className='carousel-imag'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src='/carousels/slide02.avif' className='carousel-imag' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <Image src='/carousels/slide03.avif' className='carousel-imag'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousels;