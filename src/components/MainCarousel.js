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
        // <Carousel fade interval={2000} style={{  minWidth: "100%", maxHeight: "(calc(100% - 100px))" }}>
        //     <Carousel.Item >
        //         <img
        //         className="d-block"
        //         src={capitolHill}
        //         style={{  minWidth: "100%" }}
        //         alt="First slide"
        //         />
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //         className="d-block"
        //         src={toronto}
        //         style={{  minWidth: "100%" }}
        //         alt="Second slide"
        //         />
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //         className="d-block"
        //         src={montreal}
        //         style={{  minWidth: "100%" }}
        //         alt="Third slide"
        //         />
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //         className="d-block"
        //         src={halifax}
        //         style={{  minWidth: "100%" }}
        //         alt="Third slide"
        //         />
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //         className="d-block"
        //         src={vancouver}
        //         style={{  minWidth: "100%" }}
        //         alt="Third slide"
        //         />
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //         className="d-block"
        //         src={edmonton}
        //         style={{  minWidth: "100%" }}
        //         alt="Third slide"
        //         />
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //         className="d-block"
        //         src={calgary}
        //         style={{  minWidth: "100%" }}
        //         alt="Third slide"
        //         />
        //     </Carousel.Item>
        // </Carousel>

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