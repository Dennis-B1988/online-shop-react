import React, { Component } from 'react';
import Navbar from './components/navbar';
import Product from './components/product';
import ShoppingCart from './components/shopping-cart';

class App extends Component {
    state = { 
        items: []
     } 

    addItem = (amount, name, price) => {
        let currentItems = this.state.items;
        let existingItem = currentItems.find(item => item.name === name);
        if (existingItem) {
            existingItem.amount += amount;
            existingItem.price += price;
        } else {
            currentItems.push({ amount, name, price });    
        }
        this.setState({ items: currentItems })
        console.log(this.state.items);
    }

    removeItem = (index) => {
        let currentItems = this.state.items;
        currentItems.splice(index, 1);
        this.setState({ items: currentItems })
    }

    render() { 
        return  <React.Fragment>
                    <Navbar />
                    <div className="main-container">
                        <div className="product-container">
                            <Product onAdd={() => this.addItem(1, "Sushi", 20)} image="sushi.jpg" title="Sushi" description="Description..." />
                            <Product onAdd={() => this.addItem(1, "Salami Pizza", 15)} image="salami-pizza.jpg" title="Salami Pizza" description="Description..." />
                            <Product onAdd={() => this.addItem(1, "Schokoladeneis", 6)} image="schoko-eis.png" title="Schokoladeneis" description="Description..." />
                            <Product onAdd={() => this.addItem(1, "Gemischter Salat", 10)} image="salat.png" title="Gemischter Salat" description="Description..." />
                        </div>
                        <ShoppingCart items={this.state.items} onRemove={(index) => this.removeItem(index)} />
                    </div>
                </React.Fragment>;
    }
}
 
export default App;