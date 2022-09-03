import { Tab } from "@mui/material";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import ProductCard from "./productCard/productCard" 

function Product(props) {
  let active=props.cat.cat.filter((element)=>element.normalizedName=== (props.cat.activeCat || "Food"));
  console.log('rrrr', props.cat, active)

  return (
    <>
    
 <h1>{active[0]?.displayName}</h1>
 <h3>{active[0]?.description}</h3>

    <div className="productContainer">
    {props?.product?.map((element, idx) => (
    element.name!=""&& <ProductCard element={element} key={element.name}></ProductCard>
    )
    )}
    </div>

    </>
  );
}

const mapStateToProps = (state) => ({
    cat: state.cat,
  product: state.product.product,
});
export default connect(mapStateToProps)(Product);