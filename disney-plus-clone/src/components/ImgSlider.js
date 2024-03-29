import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ImgSlider() {
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src='/images/slider-badging.jpg' />
            </Wrap>
            <Wrap>
                <img src='/images/slider-badag.jpg' />
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button
    {
        &::before{
          font-size:10px;
          color: rgb(150,158,171);  
        }   
    }
    li.slick-active button::before
    {
        color: white;
    }

    button
    {
        z-index: 1;
    }
    .slick-list
    {
        overflow: visible;
    }
`

const Wrap = styled.div`
    cursor: pointer;
    img
    {
        border: 4px solid transparent;
        width:100%;
        height:100%;
        border-radius:8px;
        box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
                    rgba(0 0 0 / 73%) 0px 16px 10px -10px;
        transition: all 300ms;
        &:hover
        {
            border: 4px solid rgba(249,249,249,0.8);
        }
    }

`