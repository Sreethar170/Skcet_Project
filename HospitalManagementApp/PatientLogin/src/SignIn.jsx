import React from "react";

function SignIn(){

    return(
        <div className="container">

            <div className="centerdiv" style={{textAlign: 'center',paddingTop: '2cm' }}>
                <hr style={{border: '2px solid black'}}/>
                <h2 style={{paddingRight: '10cm'}}>LOGIN</h2><br />
                <form>
    
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

                <button type="submit" style={{backgroundColor: "green", color: "white"}}>SignIn</button>
                <br /><br />
                <hr style={{border: '2px solid black'}}/>
        
            </div>
            </div>
    )
}

export default SignIn