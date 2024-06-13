import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import img1 from '../assets/3.jpg'
import img2 from '../assets/4.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
const Services = () => {
    return (
        <Carousel
            infiniteLoop
            autoPlay
            showStatus={false}
            showArrows={false}
            interval={2000}
            showThumbs={false}
            className='services' >
            <div>
                <img src={img1} alt="Item1" />
                <p className='legend'>Full stack</p>
            </div>

            <div>
                <img src={img2} alt="Item2" />
                <p className='legend'>Peer to peer support</p>
            </div>



        </Carousel >
    )
}

export default Services