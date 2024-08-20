
import { useNavigate,Link } from "react-router-dom"

const login = () => {
    const history = useNavigate();

    const goToHomePage = (()=>{
        history.push('/home')
    })
    return(
        <>
        <h1>my login page</h1>
        <button onClick={goToHomePage}>Go to home page</button>
        <Link to={"/signup"}>Dont Have Account? SignUp</Link>
        </>

    )
}

export default login