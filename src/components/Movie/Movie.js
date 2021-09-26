import React, { useEffect, useState } from 'react';
import Actor from '../Actor/Actor';
import Cart from '../Cart/Cart';
import './Movie.css';

const Movie = () => {
    const [actors, setActors] = useState ([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./actors.JSON')
        .then(res => res.json())
        .then(data => setActors(data))
    } , [])
    const handleAddToCart = actor =>{
        const newCart = [...cart, actor]
        setCart(newCart)
    }
    return (
        <div className = "movie-container">
            <div className = "card-container">
                {
                    actors.map(actor => <Actor
                        key = {actor.key} 
                        actor = {actor}
                        handleAddToCart = {handleAddToCart}
                        ></Actor>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart} ></Cart>
            </div>
        </div>
    );
};

export default Movie;