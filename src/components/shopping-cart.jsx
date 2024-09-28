import React, { Component } from 'react';

class ShoppingCart extends Component {
    state = { 
        items: [{
            amount: 1,
            name: "Sushi",
            price: 10
        },
        {
            amount: 1,
            name: "Salami Pizza",
            price: 15
        }]
     } 
    render() { 
        return <div className="shopping-cart">
            <h2>Warenkorb</h2>
            {this.state.items.map((item, index) => {
                return <div className='item' key={index}>
                    <span>{item.amount} x {item.name} - {item.price}€</span>
                </div>
            })}
        </div>;
    }
}
 
export default ShoppingCart;