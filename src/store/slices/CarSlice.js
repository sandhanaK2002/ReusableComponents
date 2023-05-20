import {createSlice , nanoid} from "@reduxjs/toolkit"


const carSlice =  createSlice({

    name : "cars",
    initialState: {
        searchTerms: "",
        data : []
    },

    reducers:{

        changeSearchTerms (state, action){
            state.searchTerms = action.payload
        },

        addCar(state,action){
            state.data.push({
                name : action.payload.name,
                cost : action.payload.cost,
                id : nanoid()
            })

        },

        removeCar(state,action){
            const updated =  state.data.filter((car)=>{
               return car.id !== action.payload
             })    
            state.data = updated 
        }

    }


})



export const {changeSearchTerms , addCar , removeCar} = carSlice.actions
export const carsReducer =  carSlice.reducer