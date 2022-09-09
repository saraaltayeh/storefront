import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import  Button from '@mui/material/Button';
import { connect } from "react-redux";

function NavBarToDo(props) {
console.log(props.totalCartItems, "totaaaaaal")
    return (
      <>
        <nav className="bp4-navbar .modifier">
          <div className="bp4-navbar-group bp4-align-left">
            <div className="bp4-navbar-heading link">
             <h1>Our Store</h1>
            </div>
          </div>
          <div className="bp4-navbar-group bp4-align-right">
          <Button color="inherit"> Cart({props.totalCartItems})</Button>
          </div>
        </nav>
      </>
    );
  }

const mapStateToProps = (state) => ({
  totalCartItems: state.cartReducer.totalCartItems,
});

export default connect(mapStateToProps)(NavBarToDo);