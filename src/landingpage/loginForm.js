import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './loginForm.css'
import {login}  from '../auth/authCrud';
import { ToastContainer, toast } from 'react-toastify';
import { Redirect } from "react-router-dom";
  import 'react-toastify/dist/ReactToastify.css';
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fullname:'',
          email:'',
          username:'',
          password:'',
          redirect:false
        };
      }
      
     onChangeForm(e){
        // let user = this.state.user
        if (e.target.name === 'username') {
            this.setState({
                username:e.target.value
            })
         
        }else if (e.target.name === 'password') {
            this.setState({
                password:e.target.value
            })
          
        }
        
      }
      onSubmit(event){
        event.preventDefault();
          login(this.state).then(res=>{
              localStorage.setItem('name',this.state.username);
              this.setState({
                username:'',
                password:''
              });
              toast.success("Successfully Logged In!");
              setTimeout(() => {
                 this.setState({
                  redirect:true
              }) 
              }, 1000);
              
          },err=>{
            toast.error("Username or password is incorrect!");
          })
      }
    
    render(){
        const redirect=this.state.redirect;
        if(redirect)
        {
            return <Redirect  to='/recipePage'/>
        }

        return(
            <>
          
            <div className="login">
                <ToastContainer />
                <div className="form_box">
                <form onSubmit={(e)=>this.onSubmit(e)} className="main_form">
                    <label htmlFor="name">User Name: </label>
                    <br/>
                    <input name="username" value={this.state.username} onChange={(e) => this.onChangeForm(e)} id="username"  />
                    <br/>
                    <label htmlFor="name">Password: </label>
                    <br/>
                    <input type="password" name="password" value={this.state.password} onChange={(e) => this.onChangeForm(e)} id="password"/>
                    <br/>
                    <br/>
                    <button type="submit">Login</button>
                    <br/>
                    <br/>
                    <Link to='/newuser'><button>New User</button></Link>
                </form>
                </div>
            </div>
            </>
        )
    }
}

export default LoginForm;