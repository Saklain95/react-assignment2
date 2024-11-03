import { useState } from 'react';
import './Insta.css';

function Insta() {
    let [signIn, isSignIn] = useState(true);
    const toggleSignIn = () => {
        isSignIn(!signIn);
    }

    return (
        <div className="card">
            <h1>Instagram</h1>
            {signIn ? (<div className="adjust">
                <input type='text' placeholder='Phone number, username, email'></input>
                <input type='text' placeholder='Password'></input>
                <button className='btn1' onClick={toggleSignIn}>Sign In</button>
                <p>Don't have account? <a href='#' onClick={toggleSignIn}>Sign-Up</a></p>
            </div> ) :
                (<div className='adjust'>
                    <input type='text' placeholder='Mobile Number or Email'></input>
                    <input type='text' placeholder='Full Name'></input>
                    <input type='text' placeholder='Phone number, username, email'></input>
                    <input type='text' placeholder='Password'></input>
                    <button className='btn1' onClick={toggleSignIn}>Sign Up</button>
                    <p>Don't have account? <a href='#' onClick={toggleSignIn}>Sign-in</a></p>
                </div>)
            }
        </div>
    );
}

export default Insta;