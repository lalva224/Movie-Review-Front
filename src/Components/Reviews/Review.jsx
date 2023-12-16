import{useEffect,useRef} from "react"
import api from "../../api/axiosConfig"
import {useParams} from "react-router-dom"
import {Container,Row,Col } from "react-bootstrap"
import ReviewForm from "../reviewForm/reviewForm"
import React from "react"

const Reviews = ({getMovieData,movie,reviews,setReviews})=>{
    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;


    useEffect(()=>{
        getMovieData(movieId);
    },[])

    const addReview = async (e)=>{
        e.preventDefault();
        const rev = revText.current;
        try{
            const response = await api.post("/api/v1/reviews",{reviewBody: rev.value,imdbId:movieId});
            const updatedReviews = [...reviews,{body:rev.value}];
    
            rev.value = "";
            setReviews(updatedReviews)
        }
        catch(err){
            console.log(err);
        }
       
    }

    return(
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row>
               <Col>
               {
                <>
                    <Row>
                        <Col>
                        <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review!"/>
                        </Col>
                    </Row>
                </>
               }
               {
                reviews?.map((r)=>{
                    return(
                        <>
                            <Row>
                                <Col>{r.body}</Col>
                            </Row>
                        </>
                    )
                })
               }
               </Col>
            </Row>
        </Container>
    )
}
export default Reviews