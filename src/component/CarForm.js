import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import {addName , addCost , addCar} from "../store"




function CarForm() {

  const dispatch = useDispatch()

 const {name , cost } = useSelector((state)=>{

  console.log(state)
    return {
      name : state.form.name,
      cost : state.form.cost
    }

  })


  const handleNameChange = (event) =>{
      
      dispatch(addName(event.target.value))
      

  }

  const handleCostChange = (event) =>{
    
    dispatch(addCost(parseInt(event.target.value || 0))) 
   

  }

    
   const handleSubmit = (event)=>{
      event.preventDefault();
      dispatch(addCar({name , cost}))
    } 


  return (
    <div>
    <form onSubmit = {handleSubmit} className="max-w-md mx-auto">
    <div className="mb-4">
      <label htmlFor="name" className="block mb-2 text-lg font-medium text-gray-700">
        CarName
      </label>
      <input
        type="text"
        id="name"
        className="w-full px-4 py-2 border border-gray-300 rounded"
        placeholder="Enter car name"
        onChange = {handleNameChange}
        value = {name}
      />
    </div>
    <div className="mb-4">
      <label htmlFor="cost" className="block mb-2 text-lg font-medium text-gray-700">
        Cost
      </label>
      <input
        type="number"
        id="age"
        className="w-full px-4 py-2 border border-gray-300 rounded"
        placeholder=""
        onChange = {handleCostChange}
        value = {cost || ""}
      />
    </div>
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Submit
    </button>
  </form>
    
    </div>
  )
}

export  {CarForm}