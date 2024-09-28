import React, { Component } from 'react';
import Navbar from './components/navbar';
import Product from './components/product';
import ShoppingCart from './components/shopping-cart';

class App extends Component {
    state = {  } 
    render() { 
        return  <React.Fragment>
                    <Navbar />
                    <div className="main-container">
                        <div className="product-container">
                            <Product image="sushi.jpg" title="Sushi" description="Description..." />
                            <Product image="salami-pizza.jpg" title="Salami Pizza" description="Description..." />
                            <Product image="schoko-eis.png" title="Schokoladeneis" description="Description..." />
                            <Product image="salat.png" title="Gemischter Salat" description="Description..." />
                        </div>
                        <ShoppingCart />
                    </div>
                </React.Fragment>;
    }
}
 
export default App;