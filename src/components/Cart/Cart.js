import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    
    let totalSalary = 0;
    for (const actor of cart){
        console.log(actor.name)
        totalSalary = totalSalary + actor.salary;
    }
    // console.log(props.cart)
    return (
        <div className = "cart">
            <h4>Actors added : {cart.length} </h4>
            <h4>Total Salary : $ {totalSalary}</h4>
            <p>Actors Names : </p>
            
        </div>
    );
};

export default Cart;