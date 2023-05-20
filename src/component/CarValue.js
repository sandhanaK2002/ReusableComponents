import {useSelector} from "react-redux"

function CarValue() {

  const totalCost = useSelector(({cars:{searchTerms , data}})=>{
    return data.filter((car)=>car.name.toLowerCase().includes(searchTerms.toLowerCase())
      ).reduce((acc , car) => acc + car.cost,0)
  })

  return (
    <div className="flex justify-center">
      <h1 className="text-4xl">Total Cost : `${totalCost}`</h1>
    </div>
  )
}

export {CarValue}