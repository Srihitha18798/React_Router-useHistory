import React from "react";
import {useNavigate} from 'react-router-dom'


const Home =()=>{
    let navigate=useNavigate();
    
    return(
        <div>
            <center>
                <h4>Home Page</h4>
                <button onClick={()=>navigate('/dashboard')}>Login</button>
            </center>
        </div>
    );
}

export default Home;