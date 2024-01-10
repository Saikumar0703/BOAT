import { Headphones } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Headphonestotal:0,
  Headphonescart:[],
}

const HeadphonesSystem = createSlice({
  name: "Headphones",
  initialState,
  reducers: {
    addHeadphones(state,action) {
     // state.push(action.payload);
      // console.log("==> sice ==> " + action.payload);

     

  const exist = state.Headphonescart.find(items=> items.id == action.payload.id)

if(!exist){

  state.Headphonestotal += action.payload.price
  

}
else {
  // If it exists, you can choose to handle this case differently, e.g., show a message
  console.log(`Product with ID ${action.payload.id} already exists in the cart`);
  
}
state.Headphonescart.push(action.payload);





    },
    removeHeadphones(state, action) {
      const HeadphonesIdToRemove = action.payload;
    
      // Use filter to create a new array without the item to be removed
      state.Headphonescart = state.Headphonescart.filter((Headphones) => Headphones.id !== HeadphonesIdToRemove);
    
      // Update the total by calculating the sum of prices in the updated airpodscart
      state.Headphonestotal = state.Headphonescart.reduce((total, Headphones) => total + Headphones.price, 0);
    },

  

    incrementheadphones(state,action){

      const exist=state.Headphonescart.find((items)=> items.id == action.payload.id);


      if(exist){

        exist.HeadphonesQuentity += 1

        state.Headphonestotal+=exist.price
      }

    },

    decrementHeadphones(state,action){

      const exist=state.Headphonescart.find((items)=> items.id == action.payload.id);


      if(exist && exist.HeadphonesQuentity > 1){

        exist.HeadphonesQuentity -= 1

        state.Headphonestotal-=exist.price
      }

    }
  },
  
});

export const { addHeadphones, removeHeadphones ,incrementheadphones ,decrementHeadphones } = HeadphonesSystem.actions;

export default HeadphonesSystem.reducer;

