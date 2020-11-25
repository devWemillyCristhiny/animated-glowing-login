import React from 'react'
import './AnimatedGlowingLogin.css'

export default function(){
    return (
        <div className="container">
            <div className="form">
                <h2>Login Form</h2>
                <form>
                    <div className="inputBox">
                        <input type="text" name="" placeholder="Username"></input>
                    </div>
                    <div className="inputBox">
                        <input type="password" name="" placeholder="password"></input>
                    </div>
                    <div className="inputBox">
                        <input type="submit" value="Login"></input>
                    </div>
                    <p>Forget Password ? <a href="#">
                        Click Here</a></p>
                </form>
            </div>
        </div>
    )
}