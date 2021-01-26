import React, {Component} from 'react';
import './newUserForm.css';
import {Link} from 'react-router-dom';
import {register}  from '../auth/authCrud';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
class NewUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fullname:'',
          email:'',
          username:'',
          password:''
        };
      }

     onChangeForm(e){
        if (e.target.name === 'fullname') {
            this.setState({
                fullname:e.target.value
            })
          
        } else if (e.target.name === 'username') {
            this.setState({
                username:e.target.value
            })
         
        } else if (e.target.name === 'email') {
            this.setState({
                email:e.target.value
            })
    
        } else if (e.target.name === 'password') {
            this.setState({
                password:e.target.value
            })
          
        }
       
      }
      onSubmit(event){
        event.preventDefault();
          register(this.state).then(res=>{
              this.setState({
                fullname:'',
                email:'',
                username:'',
                password:''
              });
              toast.success("Successfully Registered!");
          },err=>{
            toast.error("User Already Exist/Server may be not Responding");
          })
      }
    render(){
        return(
           
            <div className="user"> <ToastContainer />
                <div className="user_box">
                    <h3>Create a New User Account</h3>
                <form onSubmit={(e)=>this.onSubmit(e)} className="user_form">
                <label htmlFor="name"> Name: </label>
                <br/>
                <input type="text" value={this.state.fullname} name="fullname" onChange={(e) => this.onChangeForm(e)} placeholder="Name"/>
                <br/>
                <label htmlFor="username"> Username: </label>
                <br/>
                <input type="text" name="username" value={this.state.username} onChange={(e) => this.onChangeForm(e)} placeholder="Username"/>
                <br/>
                <label htmlFor="password"> New Password: </label>
                <br/>
                <input type="password" value={this.state.password}  name="password" onChange={(e) => this.onChangeForm(e)}  placeholder="Password"/>
                <br/>
                <label htmlFor="email"> E-mail: </label>
                <br/>
                <input type="email" name="email" value={this.state.email} onChange={(e) => this.onChangeForm(e)} placeholder="E-mail"/>
                <br/>
                <br/>
                <button type="submit" >Sign-Up</button>
                <br/>
                <br/>
                <Link to='/'><button>Back to Login</button></Link>
                </form>
                </div>
            </div>
        )
    }
}


export default NewUserForm;
