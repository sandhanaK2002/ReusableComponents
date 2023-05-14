import Button from "../components/Button";
import {useReducer} from "react"

const reducer = (state, action) =>{
    switch(action.type){

        case "INCREMENT":
            return {
                ...state , 
                count : state.count + 1
            }  
            
        case "DECREMENT":
            return {
                ...state,
                count : state.count - 1
            }    

        case "VALUE-TO-ADD":
            return {
                ...state, 
                valuetoadd : action.payload
            }
          
        case "ADDING-VALUE-TO-COUNT":{
            return {
                ...state, 
                count : state.count + state.valuetoadd, 
                valuetoadd : 0
            }
        }    

    }
}


const CounterPage = ({ initialCount})=>{
    // const [count , setCount] =  useState(initialCount) 
    // const [valuetoadd , setValueToAdd] = useState(0)

    const [state , dispatch] = useReducer(reducer , {count : initialCount, valuetoadd : 0})
    console.log(state)


    const Increment = ()=>{
        dispatch({
            type: "INCREMENT"
        })
    }

    const Decrement = ()=>{
        dispatch({
            type : "DECREMENT"
        })

    }

    const handleInputChange = (event)=>{
        const value = parseInt(event.target.value) || 0  
        dispatch({
            type: "VALUE-TO-ADD",
            payload : value
        })
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        dispatch({
            type : "ADDING-VALUE-TO-COUNT",
            
        })
    }


    return (
        <div>
           <h1>Counter Count : <span className="text-xl">{state.count}</span></h1>
           <div className = "flex">
            <Button onClick = {Increment} className="bg-green-500">Increment</Button>
            <Button onClick = {Decrement} className="bg-red-500">Decrement</Button>
           </div>
          
           <form onClick = {handleSubmit}>
                <label htmlFor="text-input">Add a Lot :</label>
                <input value = {state.valuetoadd || ""} onChange={handleInputChange} id="text-input" className="border border-gray-500 ml-1" type="number"/>
                <Button className="bg-blue-100">Add it!</Button>
           </form>
        </div>
    )
}


export default CounterPage