import React from "react"
import "./Hero.css"
import Carousel from "react-material-ui-carousel"
import {Paper} from "@mui/material"

// Carousel is for showing images in a more appearling way
// Paper- Create shadow effect
//movies? -> ? checks if null and if so then prevents rest of code from executing.
const Hero = ({movies})=>{
    return(
        <div className="movie-carousel-container">
            
            <Carousel>
                {
                    
                    movies?.map((movie)=>{
                        return(
                            <Paper key={movie.id} >
                                <div className="movie-card-container" >
                                    <div className="movie-card" style = {{"--img": `url(${movie.backdrops[0]})`}}>
                                        <div className="movie-detail">
                                                <div className="movie-poster">
                                                    <img className="movie-img" src = {movie.poster} alt=""/>
                                                </div>
                                            <div className="movie-title">
                                                <h4>{movie.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero