import React from 'react'
import styled from 'styled-components'



const Viewers = ()=> {

    
 
        return (
           

        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" />
                <video autoPlay={true} muted loop={true} playsInline={true}> 
                
                    <source src="/videos/1564674844-disney.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" />
                <video autoPlay={true} muted loop={true} playsInline={true}> 
                
                    <source src="/videos/1564676714-pixar.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" />
                <video autoPlay={true} muted loop={true} playsInline={true}> 
                
                    <source src="/videos/1564676115-marvel.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" />
                <video autoPlay={true} muted loop={true} playsInline={true}> 
                
                    <source src="/videos/1608229455-star-wars.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" />
                <video  autoPlay={true} muted loop={true} playsInline={true}>  
                
                    <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4"/>
                </video>
            </Wrap>
        </Container>
    );
};

export default Viewers

const Container  = styled.div`
    margin-top:30px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5,minmax(0, 1fr));

    @media( max-width: 760px){
        grid-template-columns: repeat(1,minmax(0, 1fr));
    }
`
const Wrap = styled.div`
    padding-top: 56.25%;
    border: 2px solid rgba(249,249,249,0.1);
    overflow:hidden;
    cursor: pointer;
    position: relative;
    border-radius: 10px;
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
                 rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 0.3s;
    img
    {
        inset:0px;
        display:block;
        object-fit: cover;
        width:100%;
        height:100%;
        position: absolute;
        z-index:1;
        top:0px;
        opacity:1;
        pointer-events:none;
    }

    video
    {
        width:100%;
        height: 100%;
        position: absolute;
        top:0px;
        opacity:0;
        
    }
    &:hover{
        box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px,
        rgba(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);

        video
        {
            opacity:1;
 
        }
    }
`