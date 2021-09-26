import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let totalSalary = 0;
    let name = '';
    for (const actor of cart){
        console.log(actor.name)
        totalSalary = totalSalary + actor.salary;
        name =  name + actor.name;
    }
    return (
        <div className = "cart">
            <div>
                <h3>Actors added : {cart.length} </h3>
                <h3>Total Salary : $ {totalSalary}</h3>
                <h3>Name of actors : </h3>
            </div>
            <div className = "actor-name">
             <h4 style = {{display : 'block'}}>{name}</h4>
            </div>
        </div>
        
    );
};

export default Cart;