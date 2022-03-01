import React from "react"

export default class LoginPage extends React.Component{

    constructor(props){
        super(props)//Passes the props of this class instanceto the constructor of thesuper class

        this.error = React.createRef()
        this.Email = React.createRef()
        this.Password = React.createRef()
    }

    validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

      validatePassword = (password) => {
        return password.length > 5
      };
    
      onChangeInput = () =>{
        this.error.current.textContent = ""
      }

    login = () =>{
        let body = {
            Email: this.Email.current.value,
            Password : this.Password.current.value
        }

        if (!this.validateEmail(body.Email))
        return (this.error.current.textContent = "Invalid email address!");
      if (!this.validatePassword(body.Password))
        return (this.error.current.textContent = "Invalid password!");

        fetch("http://localhost:3001/auth/login",{
            method: "post",
            body: JSON.stringify(body),
            credentials : "include",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
        }).then(response =>{
            console.log(response)
            //console.log(response.message)
            return response.json()
        }).then(data => {
            console.log(data)
            console.log(data.message)
            if (data.message == "Login successful"){
              window.location.href="/";
            }
            else{
              window.location.href="/login"
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    render(){
        return <div className="login">
            <div className="container">
            <h3>Login</h3>
            <h4 ref={this.error}></h4>
            <input ref={this.Email} onChange={this.onChangeInput} type="email" placeholder="Enter Email Address" />
            <input ref={this.Password} onChange={this.onChangeInput} type="password" placeholder="Enter Password" />
            <p>Forgot password? <span>Click Here</span></p>
            <button onClick = {this.login}>Submit</button>
            </div>
        </div>
    }
}