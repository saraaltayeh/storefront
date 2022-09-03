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
import "./productCard.css"

export default function ProductCard(props) {

console.log("1111111111",props?.element);
  return (
    <>
    {/* <div className="product">
                <br></br>
             <h1> Welcome to our web site please select catagories </h1>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWHkWSysYLDmDbsYYh8pbordnHytWMHsupIQ&usqp=CAU"alt='hello'></img>
             </div> */}

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