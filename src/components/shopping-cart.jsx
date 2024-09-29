import React, { Component } from 'react';

class ShoppingCart extends Component {
    state = { 
        
     } 
    render() { 
        return <div className="shopping-cart">
            <h2>Warenkorb</h2>
            {this.props.items.map((item, index) => {
                return <div className='item' key={index}>
                    <span>{item.amount} x {item.name} - {item.price}€</span>
                    <button onClick={() => this.props.onRemove(index)}>X</button>
                </div>
            })}
        </div>;
    }
}
 
export default ShoppingCart;