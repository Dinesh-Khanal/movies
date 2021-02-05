import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Container} from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { findAllByRole } from '@testing-library/react';

const MovieCard = styled.div`
        &:hover{
            img{
                box-shadow: 2px 2px 10px 5px #fff;
            }
            cursor: pointer;
        }
        padding: 20px;
        h3{
            font-size: 14px;
            text-align: center;
            padding: 5px;
        }
        img{
            width: 100%;
            transition: .5s ease;
        }
`;
function Home() {
    const [nowPlaying, setNowPlaying] = useState([]);
    const [popular, setPopular] = useState([]);
    useEffect(() =>{
        getMovies();
    },[]);
    const getMovies = async () =>{
        let apiKey = "02689249b40636b114a2add6006bff65";
        let now_playing = fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
        .then(res => res.json());
        let popular = fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        .then(res =>res.json());
        let top_rated = fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
        .then(res =>res.json());

        const allMovies = await Promise.all([now_playing,  popular, top_rated]);
        setNowPlaying(allMovies[0].results);
        setPopular(allMovies[1].results);
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
      };
    return (
        <Container>
            <div className="now-playing">
            <h3>Popular moveis:</h3>
            <div style={{backgroundColor:'#ccf', padding:'5px 25px'}}>
            <Slider {...settings}>
                {popular.map(movie =>(<MovieCard>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}alt=""/>
                    <h3>{movie.title}</h3>
                    </MovieCard>))}
            </Slider>
            </div>
            </div>
            <div className="now-playing">
            <h3>Now playing moveis:</h3>
            <div style={{backgroundColor:'#ccf', padding:'5px 25px'}}>
            <Slider {...settings}>
                {nowPlaying.map(movie =>(<MovieCard>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}alt=""/>
                    <h3>{movie.title}</h3>
                    </MovieCard>))}
            </Slider>
            </div>
            </div>
        </Container>
    )
}
export default Home
