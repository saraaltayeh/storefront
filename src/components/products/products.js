import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import {addToCart} from '../../store/cart'
import { connect } from "react-redux";
import ProductCard from "../productCard/productCard" 
import './products.css';

function Product(props) {
  let active=props.cat.cat.filter((element)=>element.normalizedName === (props.cat.activeCat || "Food"));
  console.log('rrrr', props.cat, active)

  return (
    <>
    
 <h2>{active[0]?.displayName}</h2>
 <h3>{active[0]?.description}</h3>

    <div className="productContainer">
    {props?.product?.map((element, idx) => (
    element.name!=""&& <ProductCard element={element} key={element.name} 
    ></ProductCard>
    )
    )}

    </div>

    </>
  );
}

const mapStateToProps = (state) => ({
    cat: state.cat,
  product: state.product.product,
  // totalCartItems: state.cartReducer.totalCartItems,
  cart: state.cart
});

const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps,mapDispatchToProps)(Product);