import React from 'react'
import {CarForm} from "./component/CarForm"
import {CarList} from "./component//CarList"
import {CarSearch} from "./component/CarSearch"
import {CarValue} from "./component/CarValue"


function App() {


  return (
    <div className = "flex-col space-y-10">
       <CarForm/>
       <CarSearch/>
       <CarList/>
       <CarValue/>
    </div>
  )
}

export default App