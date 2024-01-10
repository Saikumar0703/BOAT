import { createSlice } from '@reduxjs/toolkit';

const initialState= {
  smartwatchescart:[],
  smartwatchestotal:0,
}

const watchSystem = createSlice({
  name: "Watch",
  initialState,
  reducers: {
    addsmartWatch(state,action) {

      const actionToAdd = action.payload;

      const existingAction = state.smartwatchescart.find((item) => item.id === actionToAdd.id);


      // state.push(action.payload);
      // console.log("==> sice ==> " + action.payload);


      if (!existingAction) {
        // If it doesn't exist, add the product to the cart
        state.smartwatchescart.push(actionToAdd);
        state.smartwatchestotal += actionToAdd.price; // Update the total
      } else {
        // If it exists, you can choose to handle this case differently, e.g., show a message
        console.log(`Product with ID ${actionToAdd.id} already exists in the cart`);
      }
    },
    



    removesmartWatch(state, action) {
      // Assuming action.payload is the ID or some identifier of the Airpods to be removed
      const smartwatchesIdToRemove = action.payload;
    
      // Use filter to create a new array without the item to be removed
      state.smartwatchescart = state.smartwatchescart.filter((smartwatches) => smartwatches.id !== smartwatchesIdToRemove);
    
      // Update the total by calculating the sum of prices in the updated airpodscart
      state.smartwatchestotal = state.smartwatchescart.reduce((total, smartwatches) => total + smartwatches.price, 0);
    },


    incrementsmartwatches(state,action){

      const newItem=action.payload
      const exist=state.smartwatchescart.find((items)=>items.id == newItem.id);
  
  
        if(exist && exist.smartWatchesQuentity > 1){
          
          exist.smartWatchesQuentity+=1
       
          state.smartwatchestotal += exist.price
        }
       
  
  },
  
  decrementsmartwatches(state,action){
  
      const newItem=action.payload
      const exist=state.smartwatchescart.find((items)=>items.id == newItem.id);
  
  
        if(exist){
          
          exist.smartWatchesQuentity-=1
       
          state.smartwatchestotal -= exist.price
        }
       
  
  }
      


    }


  },
);

export const { addsmartWatch, removesmartWatch,incrementsmartwatches,decrementsmartwatches } = watchSystem.actions;

export default watchSystem.reducer;
