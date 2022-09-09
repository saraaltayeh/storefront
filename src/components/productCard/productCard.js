import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from '@mui/material/CardMedia';
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Button from '@mui/material/Button';
import "./productCard.css"
import product from "../../store/product";
import { connect } from "react-redux";
import {addToCart} from '../../store/cart'

function ProductCard(props) {

console.log("1111111111",props);
console.log("55555555",props.element);
  return (
    <>

    <Card className="productCard" size={{ maxWidth: 345 }} >
      <CardHeader
      className="header"
        avatar={
          <Avatar size={{ bgcolor: red[500] }} aria-label="recipe">
            {props?.element?.name[0].toUpperCase()}
          </Avatar>
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title={`${props?.element?.name}`}
      />
<CardMedia
        component="img"
        height="200px"
        image="https://image.shutterstock.com/image-vector/new-product-poster-banner-greeting-260nw-546097051.jpg"
        alt="product img"
      />
      <CardContent>
        <Typography variant="body2" color="text">
          description: {`${props?.element?.description}`}
        </Typography>
        <Typography variant="body2" color="text">
          price: {`${props?.element?.price}`}
        </Typography>
        <Typography variant="body2" color="text">
          inventoryCount: {`${props?.element?.inventoryCount}`}
        </Typography>
        <Button
                    variant="contained"
                    style={{ width: 100 + '%' }}
                    onClick={() => {
                    props.addToCart(props.element);
                    }}>
                    ADD TO CART
                  </Button>
      </CardContent>
    
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        </IconButton>
        <IconButton aria-label="share"></IconButton>
      </CardActions>
    </Card>
    </>

  );
}

const mapStateToProps = (state) => ({
    cartItems: state.cartReducer.cartItems,
  totalCartItems: state.cartReducer.totalCartItems
});

const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps,mapDispatchToProps)(ProductCard);