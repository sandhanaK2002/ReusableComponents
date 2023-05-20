
import {configureStore} from "@reduxjs/toolkit"
import {changeSearchTerms ,addCar , removeCar , carsReducer } from "./slices/CarSlice";
import {addName , addCost , formReducer} from "./slices/FormSlice"



const store =  configureStore({

    reducer:{
        cars : carsReducer, 
        form : formReducer
    }
  
})

console.log(store.getState())




export {addName , store, addCost ,changeSearchTerms ,addCar , removeCar};

