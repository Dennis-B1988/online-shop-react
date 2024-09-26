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
                            <Product image="sushi.jpg" title="Product" description="Description..." />
                            <Product image="sushi.jpg" title="Product" description="Description..." />
                            <Product image="sushi.jpg" title="Product" description="Description..." />
                        </div>
                        <ShoppingCart />
                    </div>
                </React.Fragment>;
    }
}
 
export default App;