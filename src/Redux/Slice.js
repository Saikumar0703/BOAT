import { createSlice } from '@reduxjs/toolkit'

//step 1
const initialState={
    airpodscart:[],
    
    airpodsTotal:0
}


const Airpodssystem=createSlice({

    name:"Cart",
    initialState,
    reducers:{
       addAirpods(state,action){


        const actionToAdd = action.payload;


        const existingAction = state.airpodscart.find((item) => item.id === actionToAdd.id);

        //step 2 (line no 19)

        //step 3 
       //sirf airpodscart ko add kar
       // const airpods = useSelector((state) => state.Airpods.airpodscart);


       //step4

       //const airpodsTotal = useSelector((state) => state.Airpods.airpodsTotal);


            // state.airpodscart.push(action.payload);
            
            // console.log("==> sice ==> " + action.payload);



           // step 5  if else pura


            // const exist=state.airpodscart.filter((items)=> items.id==action.payload.id)


            if (!existingAction) {
              // If it doesn't exist, add the product to the cart
              state.airpodscart.push(actionToAdd);
              state.airpodsTotal += actionToAdd.price; // Update the total
            } else {
              // If it exists, you can choose to handle this case differently, e.g., show a message
              console.log(`Product with ID ${actionToAdd.id} already exists in the cart`);
            }
          },
        //step 6 My card may total quentity pe {airpodsTotal} ya dal

        
        removeAirpods(state, action) {
            // Assuming action.payload is the ID or some identifier of the Airpods to be removed
            const AirpodsIdToRemove = action.payload;
          
            // Use filter to create a new array without the item to be removed
            state.airpodscart = state.airpodscart.filter((Airpods) => Airpods.id !== AirpodsIdToRemove);
          
            // Update the total by calculating the sum of prices in the updated airpodscart
            state.airpodsTotal = state.airpodscart.reduce((total, Airpods) => total + Airpods.price, 0);
          }
          ,

incrementAirpods(state,action){

    const newItem=action.payload
    const exist=state.airpodscart.find((items)=>items.id == newItem.id);


      if(exist){
        
        exist.airpodsQuentity+=1
     
        state.airpodsTotal += exist.price
      }
     

},

decrementAirpods(state,action){

    const newItem=action.payload
    const exist=state.airpodscart.find((items)=>items.id == newItem.id);


      if(exist && exist.airpodsQuentity > 1){
        
        exist.airpodsQuentity-=1
     
        state.airpodsTotal -= exist.price
      }
     

}





    }
})

export const {addAirpods,removeAirpods,incrementAirpods,decrementAirpods} = Airpodssystem.actions;

export default Airpodssystem.reducer

