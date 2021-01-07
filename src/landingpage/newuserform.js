import React, {Component,useState} from 'react';
import './newUserForm.css';
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
         console.log('OnChnageeee');
         console.log(e.target.value);
        // let user = this.state.user
        if (e.target.name === 'fullname') {
            this.setState({
                fullname:e.target.value
            })
          //user.boothname = e.target.value;
          
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
        // else if (e.target.name === 'design') {
        // //   setData({
        // //     boothname: data.boothname,
        // //     design:e.target.value,
        // //     boothCompanyName: data.boothCompanyName,
        // //     companyBackgroundParagraph: e.target.value,
        // //     videoEmbeddedLink: data.videoEmbeddedLink,
        // //     pdfFile: data.pdfFile
        // //   })
        // }
        // setState({user})
      }
      onSubmit(event){
        event.preventDefault();
          console.log(this.state);
          register(this.state).then(res=>{
              console.log(res);
              this.setState({
                fullname:'',
                email:'',
                username:'',
                password:''
              });
              toast.success("Successfully Registed!");
          },err=>{
            toast.error("User Already Exist/Server may be not Responding");
              console.log(err);
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
                </form>
                </div>
            </div>
        )
    }
}


export default NewUserForm;
