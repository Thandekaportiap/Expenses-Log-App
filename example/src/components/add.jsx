import Nav from "../navigation";

const add = () => {
    return(
        <>
        <div>
            <Nav/>
        </div>
      <div style={{display:"flex", flexDirection:"column", height:"70%", width:"100%", alignItems:"center",justifyContent:"center"}}>
      <div style={{display:"flex", flexDirection:"column", height:"70%", width:"50%"}}>
      <h1>Add a new transation</h1>
       <input type="text" placeholder="Enter amount"/>
       <input type="text" placeholder="Enter amount"/>
       <select name="" id="">
        <option value="">Income</option>
        <option value="">Expense</option>
       </select>

       <button type="submit">Add a transation</button>
      </div>
      </div>
        </>
    )
}

export default add