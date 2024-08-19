import {Outlet,Link} from "react-router-dom"

const nav = () => {
    
    return (
        <>

<nav>
            <ul style={{display:"flex",  listStyle:"none"}}>
                
                <li style={{padding:"1% 5%"}}><Link to="/">Home</Link> </li> 
                <li style={{padding:"1% 5%"}}><Link to="/about">About</Link> </li> 
                <li style={{padding:"1% 5%"}}><Link to="/add">Add Transaction</Link></li>
                
            </ul>
        </nav>
       <Outlet/>
        </>
    )
}

export default nav