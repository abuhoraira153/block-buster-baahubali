import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faFax,faMobile} from '@fortawesome/free-solid-svg-icons';
import './Actor.css';

const Actor = (props) => {
    const { img, name, role, dateOfBirth, country, salary } = props.actor;
    const icon1 = <FontAwesomeIcon icon={faCartPlus} />
    const icon2 = <FontAwesomeIcon icon={faFax} />
    const icon3 = <FontAwesomeIcon icon={faMobile} />
    return (
        <div className = "card">
            <div className = "card-img">
                <img  src = {img} alt="" />
            </div>
            <div className="card-details">
                <h3>Name : {name} </h3>
                <h4>Role : {role} </h4>
                <h4>DateOfBirth : {dateOfBirth} </h4>
                <h4>Country : {country} </h4>
                <h4>Salary : $ {salary}</h4>
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