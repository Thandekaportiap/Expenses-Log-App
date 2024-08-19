import { useState } from "react"
import DisplayTransaction from "./display";

const add = (props) => {

const [transactionItem, setTransactionItem] = useState("")
const [amount , setAmount] = useState("");
const [transactionType, setTransactionType] = useState("")

const add = () =>{
props.add(transactionItem, amount, transactionType )
}

    return(
        <>
        <div>
        <DisplayTransaction transactions={props.transactions}/>
        </div>
      
        
      <h1>Add a new transation</h1>
       <input type="text" placeholder="Enter Expense" onChange={(event)=> setTransactionItem(event.target.value)}/> <br/>
       <input type="text" placeholder="Enter amount" onChange={(event)=> setAmount(event.target.value)}/> <br/>
       <select onChange={(event)=> setTransactionType(event.target.value)}>
        <option >Income</option>
        <option >Expense</option>
       </select>
       <br/>

       <button type="submit" onClick={add}>Add a transation</button>

    
        </>
    )
}

export default add