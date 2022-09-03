const initialState = {
    cat: [
      {
        normalizedName: "Food",
        displayName: "FOOD",
        description: "SERVED EVERY DAY SINCE 1990",
      },
      {
          normalizedName: "Clothes",
          displayName: "CLOTHES",
          description: "Wear Good. Be Good.",
        },
        {
          normalizedName: "Electronics",
          displayName: "ELECTRONICS",
          description: "Best electronics Deals & Cheap electronics",
        },
    ],
    activeCat:""
  };
  
  export default (state=initialState,action)=>{
      // console.log("cat -- ",state.cat);
      const{type,payload}=action;
      switch(type){
          case "CHANGE":

              return {
                  cat:state.cat,
                  activeCat:payload
              }
              default:return state;
      }
  }
  
  export const changeActive = (name) => {
     
      return {
          type: 'CHANGE',
          payload: name
      }
  }