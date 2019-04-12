/* 
import ReactDOM from "react-dom";
import { Item, AppContainer, ExtraInfo, Code } from "../carousel/components";
import Carousel from "../carousel/Carousel"; */


/* const Slider = () => (
    <div >
        <AppContainer >
            <Carousel title="Carousel">
                <Item img="https://i.ibb.co/L1kvgBq/Friday-Artboard-3.png" />
                <Item img="https://i.ibb.co/sCm5jR9/Friday-Artboard-4.png" />
                <Item img="https://i.ibb.co/C1G2z7y/Friday-Artboard-2.png" />
                <Item img="https://i.ibb.co/BHkJj3P/Friday-Artboard-1.png" />
                <Item img="https://i.ibb.co/wBJvzzp/Friday-2-Artboard-4.png" />
            </Carousel>
        </AppContainer>
    </div>

) */

/* import Carousel from 'nuka-carousel';

const Slider = () => (
    <div>
        <Carousel autoplay={true}>
            <img src="https://i.ibb.co/L1kvgBq/Friday-Artboard-3.png" />
            <img src="https://i.ibb.co/sCm5jR9/Friday-Artboard-4.png" />
            <img src="https://i.ibb.co/C1G2z7y/Friday-Artboard-2.png" />
            <img src="https://i.ibb.co/BHkJj3P/Friday-Artboard-1.png" />
            <img src="https://i.ibb.co/wBJvzzp/Friday-2-Artboard-4.png" />
            <img src="https://i.ibb.co/BBVq3w4/Friday-2-Artboard-3.png" />
        </Carousel>
    </div>

) */
import React from "react";
import Slider from "react-slick";

var settings = {
    dots: false,
    autoplay:true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    //ariableWidth:true
  
  }

const SimpleSlider = () => (
      <Slider {...settings}>
        <div>
          <img style ={{ height:'240px', width:'560px', marginRight:20}} src="https://i.ibb.co/L1kvgBq/Friday-Artboard-3.png" />
        </div>
        <div>
        <img style ={{ height:'240px', width:'560px', marginRight:20}} src="https://i.ibb.co/sCm5jR9/Friday-Artboard-4.png" />
        </div>
        <div>
        <img style ={{ height:'240px', width:'560px', marginRight:20}} src="https://i.ibb.co/C1G2z7y/Friday-Artboard-2.png" />
        </div>
        <div>
        <img style ={{height:'240px', width:'560px', marginRight:20}} src="https://i.ibb.co/BHkJj3P/Friday-Artboard-1.png" />
        </div>
        <div>
        <img style ={{ height:'240px', width:'560px', marginRight:20}} src="https://i.ibb.co/wBJvzzp/Friday-2-Artboard-4.png" />
        </div>
        <div>
        <img style ={{ height:'240px', width:'560px', marginRight:20}} src="https://i.ibb.co/BBVq3w4/Friday-2-Artboard-3.png" />
        </div>
      </Slider>
 
    );

export default SimpleSlider;