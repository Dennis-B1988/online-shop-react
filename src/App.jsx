import React, { Component } from 'react';
import Navbar from './components/navbar';
import Product from './components/product';

class App extends Component {
    state = {  } 
    render() { 
        return  <React.Fragment>
                    <Navbar />
                    <div className="product-container">
                        <Product image="sushi.jpg" title="Sushi" description="Description..." />
                        <Product image="sushi.jpg" title="Product" description="Description..." />
                        <Product image="sushi.jpg" title="Product" description="Description..." />
                        <Product image="sushi.jpg" title="Product" description="Description..." />
                    </div>
                </React.Fragment>;
    }
}
 
export default App;