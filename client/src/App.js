import React from "react";
import "./App.css";
import {Products, ProductCreator} from "./components/Products.js";
import {Products as ProductsModel} from "./models/Products.js";

class App extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      productsLoading: true,
      products: [],
      numCharactersSubmitted: 0,
    };

    this.productsModel = new ProductsModel();

    this.update();
    this.handleProductCreated = this.handleProductCreated.bind(this)
  }

  update() {
    this.productsModel.getProducts().then(products => {
      console.log(JSON.stringify(products));
      this.setState({
        productsLoading: false,
        products: products,
      });
    });

  }

  handleProductCreated(notice) {
    this.productsModel.createProduct(notice.title, notice.content).then(id => {
      this.update();
    });
  }

  render() {
    return (
      <div className="products-app">
        <h1>Product Listing</h1>
        <ProductCreator onCreate={this.handleProductCreated} />
        <Products products={this.state.products} loading={this.state.productsLoading} />
      </div>
    );
  }
}

export default App;
