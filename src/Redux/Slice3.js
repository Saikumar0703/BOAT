import { createSlice } from '@reduxjs/toolkit';


const initialState= {

  neckbandcart:[],
    
    neckbandTotal:0,

}

const neckbandSystem = createSlice({
  name: "NECKBAND",
  initialState,
  reducers: {
    addneckband(state,action) {

      const actionToAdd = action.payload;

      // state.push(action.payload);
      // console.log("==> sice ==> " + action.payload);
        const existingAction=state.neckbandcart.find((items)=> items.id == actionToAdd.id)

        if(!existingAction){

          state.neckbandcart.push(actionToAdd);
          state.neckbandTotal += actionToAdd.price4;

        }
        else {
          // If it exists, you can choose to handle this case differently, e.g., show a message
          console.log(`Product with ID ${actionToAdd.id} already exists in the cart`);
        }

    
    },
    removeneckband(state, action) {
      // Assuming action.payload is the ID or some identifier of the Airpods to be removed
      const neckbandIdToRemove = action.payload;
    
      // Use filter to create a new array without the item to be removed
      state.neckbandcart = state.neckbandcart.filter((neckband) => neckband.id !== neckbandIdToRemove);
    
      // Update the total by calculating the sum of prices in the updated airpodscart
      state.neckbandTotal = state.neckbandcart.reduce((total, neckband) => total + neckband.price, 0);
    }
 ,
     incrementneckband(state,action){

    const newItem=action.payload
    const exist=state.neckbandcart.find((items)=>items.id == newItem.id);


      if(exist){
        
        exist.neckbandQuentity+=1
     
        state.neckbandTotal += exist.price4
      }
     
    }
,


decrementneckband(state,action){

    const newItem=action.payload
    const exist=state.neckbandcart.find((items)=>items.id == newItem.id);


      if(exist && exist.neckbandQuentity > 1){
        
        exist.neckbandQuentity-=1
     
        state.neckbandTotal -= exist.price4
      }
     
    

}
},


});

export const { addneckband, removeneckband , incrementneckband , decrementneckband} = neckbandSystem.actions;

export default neckbandSystem.reducer;
