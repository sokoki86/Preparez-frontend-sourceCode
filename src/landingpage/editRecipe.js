import React, {Component} from 'react';
import { updateRecipes } from '../auth/authCrud';
import './createRecipeForm.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import {Link} from 'react-router-dom'

class EditRecipeForm extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     singleRecipe: this.props.location.state.data
        //   };
        this.state = {
            recipe_id:this.props.location.state.data.recipe_id,
            recipe_name:this.props.location.state.data.recipe_name,
            recipe_preptime:this.props.location.state.data.recipe_preptime,
            recipe_ingredients:this.props.location.state.data.recipe_ingredients,
            recipe_instructions:this.props.location.state.data.recipe_instructions,
            category:this.props.location.state.data.category,
        };
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
      onSubmit(event){
        event.preventDefault();
          console.log(this.state);
          updateRecipes(this.state).then(res=>{
              console.log(res);
            //   this.setState({
            //     recipe_name:'',
            // recipe_preptime:'',
            // recipe_ingredients:'',
            // recipe_instructions:'',
            // category:''
            //   });
              toast.success("Recipe Updated!");
          },err=>{
            toast.error("Something Went Wrong");
              console.log(err);
          })
      }
    render(){
        return(

            <div className="recipeForm" style={{width: '900px'}}
            
        >
                <ToastContainer />
                <div className="form_box">
                <form onSubmit={(e)=>this.onSubmit(e)} className="recipe_form">
                    <label htmlFor="recipe_name"><u>Recipe Name</u></label>
                    <br/>
                    <input name="recipe_name" id="recipe_name" onChange={(e) => this.onChangeForm(e)} value={this.state.recipe_name} />
                    <br/>
                    <label htmlFor="recipe_preptime"><u>Recipe Preptime</u></label>
                    <br/>
                    <input name="recipe_preptime" id="recipe_preptime" onChange={(e) => this.onChangeForm(e)} value={this.state.recipe_preptime}/>
                    <br/>
                    <label htmlFor="name"><u>Ingredients</u></label>
                    <br/>
                    <textarea name="recipe_ingredients" id="recipe_ingredients" onChange={(e) => this.onChangeForm(e)} value={this.state.recipe_ingredients} rows="7" cols="30" />
                    <br/>
                    <label htmlFor="name"><u>Cooking Instructions</u></label>
                    <br/>
                    <textarea name="recipe_instructions" id="recipe_instructions" onChange={(e) => this.onChangeForm(e)} value={this.state.recipe_instructions} rows="7" cols="30"/>
                    <br/>
                    <label htmlFor="Category"><u>Please choose a category</u></label>
                    <br/>
                    <label htmlFor="Vegetarian" id="veggie" >Vegetarian</label>
                    <input type="radio" id="category" checked={this.state.category === 'Vegetarian'}  onChange={(e) => this.onChangeForm(e)} name="category" value="Vegetarian"/>
                    <label htmlFor="breakfast" id="breakfast" >Breakfast</label>
                    <input type="radio" id="category" onChange={(e) => this.onChangeForm(e)} name="category"  checked={this.state.category === 'Breakfast'} value="Breakfast"/>
                    <label htmlFor="Dinner" id="dinner"  >Dinner</label>
                    <input type="radio" id="category" name="category" onChange={(e) => this.onChangeForm(e)} checked={this.state.category === 'Dinner'} value="Dinner"/>
                    <label htmlFor="Sides" id="sides" >Side Dish</label>
                    <input type="radio" id="category" name="category" onChange={(e) => this.onChangeForm(e)} checked={this.state.category === 'Sides'} value="Sides"/>
                    <br/>
                    <label htmlFor="Soups" id="soups" >Soups</label>
                    <input type="radio" id="category" onChange={(e) => this.onChangeForm(e)} name="category" checked={this.state.category === 'Soups'} value="Soups"/>
                    <label htmlFor="Snacks" id="snacks" >Snacks</label>
                    <input type="radio" id="category" onChange={(e) => this.onChangeForm(e)} name="category" checked={this.state.category === 'Snacks'} value="Snacks"/>
                    <label htmlFor="Desserts" id="desserts" >Desserts</label>
                    <input type="radio" id="category" onChange={(e) => this.onChangeForm(e)} name="category" checked={this.state.category === 'Desserts'} value="Desserts"/>
                    <br/>
                    <br/>
                    <button type="submit">Update Recipe</button>
                    <br/>
                    <br/>
                    <Link  to='/homepage'><button>Go Back</button></Link>
                </form>
                </div>
            </div>
        )
    }
}


export default EditRecipeForm;