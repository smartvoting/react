import react from 'react';
import { Carousel, Button } from 'react-bootstrap';
import capitolHill from '../images/main_carousel/CapitolHill.jpeg';
import toronto from '../images/main_carousel/Toronto.jpeg';
import montreal from '../images/main_carousel/Montreal.jpeg';
import vancouver from '../images/main_carousel/Vancouver.jpeg';
import edmonton from '../images/main_carousel/Edmonton.jpeg';
import halifax from '../images/main_carousel/Halifax.jpeg';
import calgary from '../images/main_carousel/Calgary.jpg';

export default function MainCarousel() {
    const images = [capitolHill, toronto, montreal, halifax, vancouver, edmonton, calgary]
    return (
            <Carousel fade style={{ maxHeight: "100vh" }}>
                {Array.from({ length: images.length }).map((_, index) => (
                    <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={images[index]}
                                alt="We'll do this later or something"
                            />
                    </Carousel.Item>
                ))}
            </Carousel>
    );
}