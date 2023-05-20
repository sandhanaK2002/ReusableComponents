import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {removeCar} from "../store"



function CarList() {

  const dispatch= useDispatch()

  const {cars , name } = useSelector(({form , cars:{searchTerms , data}})=>{
      const filteredCars = data.filter((car)=> car.name.toLowerCase().includes(searchTerms.toLowerCase()))

    return {
       cars : filteredCars,
       name : form.name
    }

  })


  const handleRemove = (car)=>{
      console.log(car.id)
        dispatch(removeCar(car.id))
    }

    

  return (
    <div className="flex flex-wrap space-x-4">
      {cars.map((car) => (
        <div key={car.id} className="flex items-center justify-between mb-4 p-4 bg-gray-100 rounded">
          <div>
            <p className= "text-lg  uppercase" >{car.name} <span>-${car.cost || ""}</span></p>
          </div>
          <button
            onClick = {()=>handleRemove(car)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Delete
          </button>
        </div>
      ))}
      
    </div>
  )
}

export  {CarList}