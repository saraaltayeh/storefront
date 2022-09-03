import { Tab } from "@mui/material";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import ProductCard from "./productCard/productCard" 

function Product(props) {

  let active=props.cat.cat.filter((element)=>element.normalizedName=== props.cat.activeCat)

  return (
    <>
    
 <h1>{active[0]?.displayName}</h1>
 <h3>{active[0]?.description}</h3>

    {props?.product?.map((element, idx) => (
    element.name!=""&& <ProductCard element={element}></ProductCard>
    )
    )}
    </>
  );
}

const mapStateToProps = (state) => ({
    cat: state.cat,
  product: state.product.product,
});
export default connect(mapStateToProps)(Product);