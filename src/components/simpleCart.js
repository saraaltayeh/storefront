import * as React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'reactstrap'
import {remove} from '../store/cart'

const CartItem = props => {
console.log(props,"propsssssss")
    return (
        <div>
              <Button  style={{float: "right"}} color="warning" size="lg" >
      <FontAwesomeIcon icon={faCartArrowDown} />
      
      <span className="icon-button-text-right">{ props.count }</span>
    </Button>
          <ul className="cart-items">
            {console.log(props.cartItem,"this is from kartpage")}
           
            { props.cartItem.map((product,idx) => {
              return (
                <li className="cart-item" key={idx}>
                    <button
                    className="product-remove"
                    onClick={() => props.remove(product.id)}
                  >
                    × remove
                  </button>
                  <img className="product-image" width="100px" height="100px" src={product.image} />
                  <div className="product-info">
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">{product.price}</p>
                  </div>
                  <div className="product-total">
                    <p className="quantity">
                      {`${product.inventory} ${
                        product.inventory > 1 ? "Nos." : "No."
                      }`}
                    </p>
                    <p className="amount">In stock</p>
                  </div>
                  <button
              type="button"
            >
              PROCEED TO CHECKOUT
            </button>
                </li>
              );
            })}
          </ul>
          <div className="action-block">
           
          </div>
        </div>
      );
}

const mapStateToProps = state => ({
    products: state.products.products,
    catagories : state.catagories.catagories,
    cartItems : state.cartReducer.cartItems,
    count : state.cartReducer.totalCartItems
});

const mapDispatchToProps = {remove}
export default connect(mapStateToProps,mapDispatchToProps)(CartItem)