const initialState = {
    cartItems: [
  
    ],
    totalCartItems: 0,
  };
  // eslint-disable-next-line
  export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'addToCart':
        console.log(payload, "ppppppp");
        let active = payload;
        let totalCartItems = state.totalCartItems +1
        const cartItems =[...state.cartItems ,active]
        
      
        return {cartItems :cartItems ,
            totalCartItems : totalCartItems
        } 

        case 'REMOVE':
            console.log(payload,"cartItems remove")
           
            return {
                ...state,
                cartItems: state.cartItems.filter(
                  (product) => product.id !== payload
                ),
                totalCartItems:state.totalCartItems-1
            }

            case 'RESET' : 
            return initialState
                   default :
                   return state
                }
  };
  
  export const addToCart = product => {
    return {
      type: 'addToCart',
      payload: product,
    };
  };

  export const reset = ()=>{
    return {
        type: 'RESET',
 }
 }

export const remove = product => {
    return {
      type: 'REMOVE',
      payload: product,
    };
    
  };