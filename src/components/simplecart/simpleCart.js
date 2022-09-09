import * as React from 'react';
import { connect } from 'react-redux';
import CardMedia from '@mui/material/CardMedia';
import './simpleCart.css'
import {remove} from '../../store/cart'

const CartItem = props => {
console.log(props,"xxxxxxxxxxx")
    return (
        <div>
          <section className="container">
      <ul className="product">
        {props.cartItems.map((product, index) => {
          return (
            <>
            <li className="row" key={index}>
              <div className="col left">
                <div className="thumbnail">
                <CardMedia
        component="img"
        height="200px"
        image="https://image.shutterstock.com/image-vector/new-product-poster-banner-greeting-260nw-546097051.jpg"
        alt="product img"
      />
                </div>
                <div className="detail">
            <div className="name">
                    <a href="#">{product.title}</a>
                  </div>
                  <div className="description">{product.description}</div>
                  <div className="price">{product.price}</div>
                </div>
              </div>

      <div className="remove">
                  <svg
                    onClick={() => props.remove(product.id)}
                    version="1.1"
                    className="close"
                    x="0px"
                    y="0px"
                    viewBox="0 0 60 60"
                    enableBackground="new 0 0 60 60"
                  > 
                  <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                  </svg>
                  
                </div>
            </li>
            </>
          );
        })}
      </ul>
      
    </section>
        </div>
      );
}

const mapStateToProps = state => {
console.log('fffff-f-f-f-', state);
  return ({
    cartItems : state.cartReducer.cartItems,
    products: state.products,
    cat : state.cartReducer.cat,
    totalCartItems : state.cartReducer.totalCartItems
});
};

const mapDispatchToProps = {remove}
export default connect(mapStateToProps,mapDispatchToProps)(CartItem)

