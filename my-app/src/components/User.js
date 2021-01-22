import React, { Component } from 'react';
import NavbarMenu from "./NavbarMenu";
import "./User.css"




class User extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: ''
        }
    }
    state = {  }

    login() {
        console.warn(this.state)
        fetch("http://localhost:3000/login?q=" + this.state.name).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                if (resp.length > 0) {
                    localStorage.setItem('login',JSON.stringify(resp))
                    console.warn(this.props.history.push('/'))
                }
                else {
                    alert("Please check username and password pr Click on Change Password")
                }

            })
        })
    }

    changePassword(){
        console.warn(this.state)
    }

    render() { 
        return ( 
            <>
                <NavbarMenu/>
                <div className="container mt-5">
                <div className="card" style={{width: 550, border: 0}}>
                <input type="text"
                    placeholder=" Enter Name"
                    name="user" onChange={(event) => this.setState({ name: event.target.value })} /> <br /> <br />
                <input
                    placeholder=" Enter Password"
                    type="password" name="password" onChange={(event) => this.setState({ password: event.target.value })} /> <br /> <br />
                <div className="row">
                    <div className="col-md-2">
                    <button onClick={() => { this.login() }} className="btn btn-primary btn-md active">Login</button>          
                    </div>
                    <div className="col-md-4">
                    <button onClick={() => { this.changePassword() }} className="btn btn-primary btn-md active">Change Password</button>
                    </div>
                </div>
                </div>

              

                </div>

            </>
         );
    }
}
 
export default User;