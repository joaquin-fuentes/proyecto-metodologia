import { useState } from 'react';
import {Carousel} from 'react-bootstrap';
import banner1 from '../../assets/imagenes/banner1.png';
import banner2 from '../../assets/imagenes/banner2.png';
import banner3 from '../../assets/imagenes/banner3.png';
import banner0 from '../../assets/imagenes/logoCatalogo.png';

function Carousel1() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='carouselInicio' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='h-100'>
        <img className='imgCarousel imgCarouselLogo' src={banner0} alt='imagen de banner'/>
      </Carousel.Item>
      <Carousel.Item className='h-100'>
        <img className='imgCarousel' src={banner1} alt='imagen de banner'/>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className='h-100'>
        <img className='imgCarousel' src={banner2} alt='imagen de banner' />
       
      </Carousel.Item>
      <Carousel.Item className='h-100'>
        <img className='imgCarousel' src={banner3} alt='imagen de banner'/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;