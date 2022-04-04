import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
const AnimeDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [anime, setAnime] = useState([]);


    const path = location.pathname.split("/")[2];


    useEffect(() => {
        const getData = async () => {
            const response = await axios.get("https://ghibliapi.herokuapp.com/films/" + path);
            setAnime(response.data);
            console.log(response.data);
        };
        getData();
    }, [path]);
    return (
        <div>
            <section className="detail">
                <div className="content">
                    <h2>{anime.title}</h2>
                    <span>Release Date: {anime.release_date}</span>
                    <p className="rating">Director: {anime.director}</p>
                    <div className="about">
                        <img src={anime.movie_banner} alt="" />

                        <p>{anime.description}</p>
                    </div>
                    <button className="close" onClick={() => (
                        navigate("/")
                    )}>
                        Close
                    </button>
                </div>
            </section>
        </div>
    )
}

export default AnimeDetails