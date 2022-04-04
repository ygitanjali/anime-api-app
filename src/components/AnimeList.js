import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AnimeList = () => {
    const [animes, setAnime] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get("https://ghibliapi.herokuapp.com/films");
            setAnime(response.data);
            console.log(response.data);
        };
        getData();
    }, []);

    return (
        <div className="animeList">
            {animes.map((anime, idx) => (
                <div className="result" key={idx}>
                    <button
                        onClick={() => {
                            navigate(`/anime_details/${animes[idx].id}`);
                        }}
                    >
                        <img src={animes[idx].image} alt="" />
                        <h3>{animes[idx].title}</h3>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default AnimeList;
