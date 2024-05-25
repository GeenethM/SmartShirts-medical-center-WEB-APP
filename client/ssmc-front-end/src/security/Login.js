import './LoginStyles.css'
import { Link } from 'react-router-dom';

function Login(){

    return(
        
        <div id="login-body">
    <div id="login-box">
        <form action="">
        <div id="login-container">
            <div id="top-header">
                <header id="heading-1">Login</header>
            </div>
    
            <div className="input-field">
                <input type="text" className="input" placeholder="username" required/>
            </div>
    
            <div className="input-field">
                <input type="password" className="input" placeholder="password" required/>
            </div>
    
            <div className="login-buttons">
                {/* <div>
                    <input type="submit" className="submit" value="Login"/>
                </div>
    
                <div>
                    <input type="button" className="button" value="Register"/>
                </div> */}
                <button type="submit" className="submit"><Link to="/dashboard">Login</Link></button>
                <button type="" id="login-register-button">Register</button>
            </div>
            
    
        </div>
        </form>
        
    </div>
</div>
    
    )
}

export default Login;


/*<div>
            <h1>Login page</h1>
            <form action="" >
                <div>
                     <label htmlFor="">Username</label> <br /> 
                    <input type="text" placeholder='username'/>
                </div>

                <div>
                     <label htmlFor="">Password</label><br /> 
                    <input type="password" placeholder='password'/>
                </div>
                <button type="submit"><Link to="/dashboard">Login</Link></button>
            </form>
            
        </div>*/

        // <div><img src="logo/logo.jpeg" class="logo"></div>