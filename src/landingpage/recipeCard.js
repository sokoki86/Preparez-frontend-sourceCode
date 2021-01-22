import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import './recipeCard.css';

class RecipeCard extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
          singleRecipe: this.props.location.state.data
        };
      }
    render(){
        return(
            <div className="form-box">
                <div className="recipe_box">
                    <h1 style={{marginLeft:'5px',color:'brown'}}>{this.state.singleRecipe.recipe_name}</h1>
                   
                   <br></br> <h4>"<i>{this.state.singleRecipe.recipe_instructions}</i>"</h4>
                    <br></br><p><b ><span className="ml-1" style={{color:'#981313'}}>Ingrdients</span></b> : {this.state.singleRecipe.recipe_ingredients}</p>
                    <p><b ><span className="ml-1" style={{color:'#981313'}}>Time Required : </span></b> : {this.state.singleRecipe.recipe_preptime}</p>
                    <span className="ml-1" style={{color:'#981313'}}><b>Category :</b> </span> <span className="badge badge-pill badge-primary"> {this.state.singleRecipe.category}</span>
                    <br></br>
                    <br></br>
                    <Link  to='/recipePage'><button style={{marginLeft:'35%'}}>Go Back</button></Link>
                </div>
                

            </div>

        )

        
    }
}

export default RecipeCard;