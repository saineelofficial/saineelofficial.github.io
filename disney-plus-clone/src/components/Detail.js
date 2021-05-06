import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../firebase'

function Detail () {

    const { id } = useParams();
    const [ movie, setMovie ] = useState()


    useEffect(()=>{

        db.collection('movies')
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                setMovie(doc.data());
            }
            else{
                //redirect
            }
        })
    }, [id])


    return (
        <Container>
            {
                movie && (
                    <>
                        <Background>
                            <img src={movie.backgroundImg} />
                        </Background>
                        <Imgtitle>
                            <img src={movie.titleImg} />
                        </Imgtitle>
                        <Controls>
                            <PlayBtn>
                                <img src='/images/play-icon-black.png' />
                                <span>PLAY</span>
                            </PlayBtn>
                            <TrailerBtn>
                                <img src='/images/play-icon-white.png' />
                                <span>TRAILER</span>
                            </TrailerBtn>
                            <AddBtn>
                                <span>+</span>
                            </AddBtn>
                            <GroupWatch>
                                <img src='/images/group-icon.png' />
                            </GroupWatch>
                        </Controls>
                        <SubTitle>
                            {movie.subTitle}
                        </SubTitle>
                        <Description>
                            {movie.description}
                        </Description>
                    </>
                )

            }
        </Container>
    )
}

export default Detail 

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw - 5px);
    position: relative;

`
const Background = styled.div`
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;
    img
    {
        width: 100%;
        height:100%;
        object-fit: cover;
        background-position: center;
        
    }
`
const Imgtitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    margin-top: 60px;
    img
    {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
`
const PlayBtn = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display:flex;
    align-items: center;
    height: 56px;
    border: none;
    background-color: rgba(249,249,249);
    padding: 0px 24px;
    letter-spacing: 1.8px;
    cursor: pointer;
    margin-right: 22px;
    &:hover
    {
        background: rgba(198,198,198)
    }
`
const TrailerBtn = styled(PlayBtn)`
   background: rgba(0 0 0 / 30%);
   color: white;
   border: 1px solid rgba(249,249,249);
   &:hover{
       background: rgba(0 0 0 / 50%)
   }
`
const AddBtn = styled.button`
   height: 44px;
   width:44px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
   border: 2px solid rgba(249,249,249);
   background: rgba(0 0 0 / 60%);
   cursor: pointer;
   margin-right: 16px;
   span
   {
        font-size: 30px;
        color: white;
   }
   &:hover{
       background: rgba(0 0 0 / 35%);
   }
`
const GroupWatch = styled(AddBtn)`
   background: rgba(0 0 0);
   &:hover{
       background: rgba(0 0 0 / 40%);
   }
`
const SubTitle = styled.div`
color: rgb(249,249,249);
font-size: 15px;
margin-top: 26px;
`
const Description = styled.div`
   font-size: 20px;
   line-height: 1.4;
   margin-top: 16px;
   color: rgb(249,249,249);
   max-width: 760px;

`