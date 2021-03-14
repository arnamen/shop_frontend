import React from 'react'
import { CarouselProvider, Slider, Slide, Image} from 'pure-react-carousel';

import classes from './Carousel.module.css';

import sale1 from '../../../public/assets/Carousel/sale1.jpg';
import sale2 from '../../../public/assets/Carousel/sale2.jpg';
import smartphones from '../../../public/assets/Carousel/smartphones.jpg';
import delivery from '../../../public/assets/Carousel/delivery.jpg';

export default function Carousel ( props ) {
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
                <Slide className={classes['cursor-pointer']} index={0}>
                    <Image src={sale1} alt='sale1'></Image>
                </Slide>
                <Slide className={classes['cursor-pointer']} index={1}>
                    <Image src={smartphones} alt='smartphones'></Image>
                </Slide>
                <Slide className={classes['cursor-pointer']} index={2}>
                    <Image src={delivery} alt='delivery'></Image>
                </Slide>
                <Slide className={classes['cursor-pointer']} index={3}>
                    <Image src={sale2} alt='sale2'></Image>
                </Slide>
            </Slider>
        </CarouselProvider>
    )
}
