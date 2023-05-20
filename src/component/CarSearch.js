import React from 'react'
import {changeSearchTerms} from "../store"
import {useDispatch , useSelector} from "react-redux"

function CarSearch() {

  const dispatch =  useDispatch()
  const searchTerm = useSelector((state)=>{
    
  })

  const handleSearchInput = (event) =>{
      dispatch(changeSearchTerms(event.target.value))
    }




  return (
    <div className="flex flex-row items-center justify-between p-4 bg-gray-200 max-w-md mx-auto">
    <h1 className="text-xl font-bold">Search</h1>
    <input
      type="text"
      className="w-48 px-4 py-2 border border-gray-300 rounded"
      placeholder="Enter search term"
      onChange = {handleSearchInput}
      value = {searchTerm}
    />
  </div>
  )
}

export  {CarSearch}