import React from 'react'
import { CarouselProvider, Slider, Slide, Image} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import './Carousel.css';

import sale1 from '../../assets/Carousel/sale1.jpg';
import sale2 from '../../assets/Carousel/sale2.jpg';
import smartphones from '../../assets/Carousel/smartphones.jpg';
import delivery from '../../assets/Carousel/delivery.jpg';

export default function ( props ) {
    return (
            <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={60}
            totalSlides={4}
            infinite
            visibleSlides={2}
            hasMasterSpinner
            isPlaying
            interval={3000}
            dragStep={2}
            step={2}
            touchEnabled
            
        >
            <Slider>
                <Slide className='cursor-pointer' index={0}>
                    <Image src={sale1} alt='sale1' onClick={() => window.location.href='#'}></Image>
                </Slide>
                <Slide className='cursor-pointer' index={1}>
                    <Image src={smartphones} alt='smartphones' onClick={() => window.location.href='#'}></Image>
                </Slide>
                <Slide className='cursor-pointer' index={2}>
                    <Image src={delivery} alt='delivery' onClick={() => window.location.href='#'}></Image>
                </Slide>
                <Slide className='cursor-pointer' index={3}>
                    <Image src={sale2} alt='sale2' onClick={() => window.location.href='#'}></Image>
                </Slide>
            </Slider>
        </CarouselProvider>
    )
}
