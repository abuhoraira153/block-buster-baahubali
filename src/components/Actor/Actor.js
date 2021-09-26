import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faWalking, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import './Actor.css';

const Actor = (props) => {
    // console.log(props.actor)
    const { img, name, role, dateOfBirth, country, salary } = props.actor;
    const icon1 = <FontAwesomeIcon icon={faCartPlus} />
    const icon2 = <FontAwesomeIcon icon={faWalking} />
    const icon3 = <FontAwesomeIcon icon={faShoppingBasket} />
    return (
        <div className = "card">
            <div className = "card-img">
                <img  src = {img} alt="" />
            </div>
            <div className="card-details">
                <p>Name : {name} </p>
                <p>Role : {role} </p>
                <p>DateOfBirth : {dateOfBirth} </p>
                <p>Country : {country} </p>
                <p>Salary : $ {salary}</p>
            </div>
            <div  className = "btn-regular">
                <button onClick = {() => props.handleAddToCart(props.actor)}>{icon1} Add to cart</button>
            </div>
            <div className = "card-icons">
                <div className = "card-icon">
                    <h1>{icon2}</h1>
                </div>
                <div>
                    <h1>{icon3}</h1>
                </div>
            </div>
        </div>
    );
};

export default Actor;