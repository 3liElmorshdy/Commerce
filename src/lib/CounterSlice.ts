import { counter } from "@fortawesome/fontawesome-svg-core";
import { createSlice } from "@reduxjs/toolkit";


let x  = {counter: 0}
let y = createSlice({
  name:"counterSlice",
initialState:x,
reducers:{
    increase: (state) => {
      state.counter += 1;
    },
    decrease: (state) => {
      state.counter -= 1;
    },
  // increase:()=>{
  //   console.log("one two three,increase")
  // },
  // decrease:()=>{console.log("decrease")},
  increaseByA:()=>{console.log("increaseByA")},
}

})
export let counterSlicer =  y.reducer


export let {increase,decrease} = y.actions