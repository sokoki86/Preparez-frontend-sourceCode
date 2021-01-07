import React, { Component } from 'react';
import { Link } from 'react-router-dom'
importRECIPES from './recipes';
import { getAllRecipes, getSearchRecipes, deleteRecipe } from '../auth/authCrud';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./recipepage.css"
import RecipeBox from "./createRecipebutton"
import { Redirect } from "react-router-dom";
import RecipeCard from './recipeCard';
import { debounce } from 'lodash'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
class RecipePage extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
           RECIPES: [],
            showDetail: false,
            recipe: {},
            show:false
        };
        this.searchRecipe = debounce(this.searchRecipe.bind(this), 1000);
    }
    onChangeForm(e){
        console.log('OnChnageeee');
        console.log(e.target.value);
       // let user = this.state.user
       if (e.target.name === 'recipe_name') {
           this.setState({
               recipe_name:e.target.value
           })
         //user.boothname = e.target.value;
         
       } else if (e.target.name === 'recipe_preptime') {
           this.setState({
               recipe_preptime:e.target.value
           })
        
       } else if (e.target.name === 'recipe_ingredients') {
           this.setState({
               recipe_ingredients:e.target.value
           })
   
       } else if (e.target.name === 'recipe_instructions') {
           this.setState({
               recipe_instructions:e.target.value
           })
         
       }
        else if (e.target.name === 'category') {
           this.setState({
               category:e.target.value
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

    handleClose(){this.setState({show:false});}
    handleShow(){ this.setState({show:true});}
    componentDidMount() {
        fetch('https://serene-mesa-65774.herokuapp.com/')
        .then(response => response.json())
        
        getAllRecipes().then(res => {
            console.log(res);
            this.setState({
               RECIPES: res.data
            })
        })
    }
    searchRecipe(e) {
        if (e.target.value !== '') {
            getSearchRecipes(e.target.value).then(res => {
                console.log(res);
                this.setState({
                   RECIPES: res.data
                })
            })
        }
        else {
            getAllRecipes().then(res => {
                console.log(res);
                this.setState({
                   RECIPES: res.data
                })
            })
        }
        console.log(e.target.value);
    }

    deleteItem(id) {
        if (window.confirm("Are you sure you want to delete it?")) {
            deleteRecipe(id).then(res => {
                console.log(res);
                getAllRecipes().then(res => {
                    console.log(res);
                    this.setState({
                       RECIPES: res.data
                    })
                })
                toast.success("Recipe Deleted Successfully!");
            }, err => {
                toast.error("Something Went Wrong!");
                console.log(err);
            })
        }


    }
    getRecipe(recipe) {
        this.setState({
            recipe: recipe,
            redirect: true
        })
        console.log(recipe);
    }
    logout(){
        localStorage.clear();
        // eslint-disable-next-line no-restricted-globals
        location.reload();

    }
    render() {
        const redirect = this.state.redirect;
        if (redirect) {
            return <Redirect to={{
                pathname: "/recipecard",
                state: { data: this.state.recipe }
            }} />
        }
        if (localStorage.getItem('name')==null) {
            return <Redirect to='/' />
        }
        return (
            <div className="recipe">
                <ToastContainer />
                <div className="recipe_box">
                    <h3><u>Recipes</u></h3>
                    <form className="searchbox">
                        <label htmlFor="name"> Search For Recipe </label>
                        <br />
                        <input name="name" onChange={(e) => this.searchRecipe(e)} placeholder="Search Recipe" />
                        <br />
                    </form>
                    <div>
                        <ul className="recipelist">
                            {this.state.recipes.map(recipe =>
                                <li className="listItems" key={recipe.recipe_id}>
                                    <a onClick={(e) => this.getRecipe(recipe)} style={{ color: 'blue', cursor: 'pointer' }} >
                                        {recipe.recipe_name} {recipe.recipe_preptime}
                                    </a>                <Link push to={{
                pathname: "/editrecipe",
                state: { data: recipe }
            }}><button  style={{ width: '51px', backgroundColor: 'green', cursor: 'pointer' }}>Edit</button></Link>
  <button onClick={(e) => this.deleteItem(recipe.recipe_id)} style={{ width: '51px', backgroundColor: 'red', cursor: 'pointer' }}>Delete</button>
                                </li>
                            )}
                        </ul>

                    </div><RecipeBox />
                </div>
                <Link push to="/"
        ><button  onClick={()=>this.logout()} style={{ width: '80px',marginLeft:'250px', backgroundColor: 'red', cursor: 'pointer' }}>Log Out</button></Link>
            </div>
        )
    }
}

export default RecipePage;