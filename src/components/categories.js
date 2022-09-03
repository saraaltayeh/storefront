import { Tab } from "@mui/material";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import { changeActive } from "../store/cat";
import Product, { filterProduct } from "../store/product";
import product, { reset } from "../store/product";

function Categories(props) {
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tab
          label="FOOD"
          onClick={() => {
            props.reset();
            props.changeActive("Food");
            props.filterProduct("Food");
            
          }}
        />
        <Tab
          label="Clothes"
          onClick={() => {
            props.reset();
            props.changeActive("Clothes");
            props.filterProduct("Clothes");
            
          }}
        />
        <Tab
          label="Electronics"
          onClick={() => {
             props.reset();
            props.changeActive("Electronics");
            props.filterProduct("Electronics");
           
          }}
        />
      </Box>
    </>
  );
}

const mapDispatchToProps = { changeActive, filterProduct, reset };

const mapStateToProps = (state) => ({
  cat: state.cat,
  product: state.product,
});
export default connect(mapStateToProps, mapDispatchToProps)(Categories);