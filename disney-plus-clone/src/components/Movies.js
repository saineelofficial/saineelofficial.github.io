import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { selectMovies } from '../features/movie/movieSlice'
import { useSelector } from 'react-redux'
function Movies() {

    const movies = useSelector(selectMovies);
    return (

        <Container>
            <h4>Recommanded for You</h4>
            <Content>
               { 
                   movies && 
                    movies.map((movie)=>(
                                                
                        <Wrap>
                            <Link to={`/detail/${movie.id}`}>
                                <img src={movie.cardImg} alt='' />
                            </Link>
                        </Wrap>
                    ))
               }
            </Content>
        </Container>
    )
}

export default Movies

const Container  = styled.div`


`
const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(4,minmax(0, 1fr));
    grid-gap: 25px;    

    @media(max-width: 760px){
        grid-template-columns: repeat(2,minmax(0, 1fr));
    }
`
const Wrap  = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
                rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms;
    img
    {
        width:100%;
        height:100%;
        object-fit: cover;
    }

    &:hover
    {
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);
        box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px,
                    rgba(0 0 0 / 72%) 0px 30px 22px  -10px;
    }

    

`