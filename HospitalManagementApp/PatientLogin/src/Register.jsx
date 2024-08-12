import { useState } from "react";
import axios from "axios";

function Register(){
    const [name, setName]= useState()
    const [email, setEmail]= useState()
    const [password, setPassword]= useState()
   
    const handleSubmit =(e) =>{
        e.preventDefault()
        axios.post('http//localhost:3001/Register', {name,email,password})
        .then(result=> console.log(result))
        .catch(err=> console.log(err))
    }

    return(
        <div className="container">

            <div className="centerdiv" style={{textAlign: 'center',paddingTop: '1cm' }}>
                <hr style={{border: '2px solid black'}}/>
                <h2 style={{paddingRight: '10cm'}}>REGISTER</h2><br />
                <form onSubmit={handleSubmit}>
                    <label style={{paddingRight: '5cm'}}><strong>NAME</strong></label><br /><br />
                    <input 
                    type="text"
                    placeholder="Enter Your Name"
                    onChange={(e)=> setName(e.target.value)}
                    />

                    <br /><br />

                    <label  style={{paddingRight: '5cm'}}><strong>EMAIL</strong></label><br /><br />
                    <input 
                    type="email"
                    placeholder="Enter Your Email"
                    onChange={(e) => setEmail(e.targetvalue)}
                    />

                     <br /><br />

                     <label style={{paddingRight: '4cm'}}><strong>PASSWORD</strong></label><br /><br />
                    <input 
                    type="password"
                    placeholder="Enter Your Password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </form>
                <br />
                <button type="submit" style={{backgroundColor: "green", color: "white"}}>REGISTER</button>
                <br /><br />
                <hr style={{border: '2px solid black'}}/>
                <p>ALREADY HAVE AN ACCOUNT <tab />
                <a href='./SignIn'className="inbutton bg-green">Sign In</a>
                </p>
            </div>

        </div>
    )
}

export default Register