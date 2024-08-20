import {Outlet,Link} from "react-router-dom"

const nav = () => {
    
    return (
        <>

<nav>
            <ul style={{display:"flex",  listStyle:"none", marginTop:"0"}}>
                
                <li style={{padding:"1% 5%"}}><Link to="/">Home</Link> </li> 
                <li style={{padding:"1% 5%"}}><Link to="/login">LogIn</Link> </li> 
                <li style={{padding:"1% 3%"}}><Link to="/add">Add Transaction</Link></li>
                
            </ul>
        </nav>
       <Outlet/>
        </>
    )
}

export default nav