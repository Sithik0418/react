import React, {useState} from 'react'
import './loginSignup.css';
import emailIcon from '../../Assets/email.png';
import passwordIcon from '../../Assets/password.png';
import personalIcon from '../../Assets/person.png';

const LoginSignup = () => {

    const[action, setAction] = useState('Sign Up')
    const handleChange = (value) => {
    if(value === action) {
    console.log("sss")
    } else {
        setAction(value)
    }
    }
  return (
    <div className="container">
        <div className="header">
            <div className="header-text">{action}</div>
            <div className="header-underline">-</div>
        </div>

        <div className="inputs">
           { action === 'Sign Up' && (<div className="input">
                <img src={personalIcon} alt=""/>
                <input type="text" placeholder='Name'/>
            </div>)}

            <div className="input">
                <img src={emailIcon} alt=""/>
                <input type="email" placeholder="Email" />
            </div>

            <div className="input">
                <img src={passwordIcon} alt=""/>
                <input type="password" placeholder='Password' />
            </div>
        </div>

        <div className="forgot-password"> Lost password ? <span>Click here!</span> </div>

        <div className="submit-container">
            <div className={action === 'Sign Up' ? 'submit' : 'gray'}onClick={ () => handleChange('Sign Up')}>Signup</div>
            <div className={action === 'Login' ? 'submit' : 'gray'} onClick={ () => handleChange('Login')}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup
