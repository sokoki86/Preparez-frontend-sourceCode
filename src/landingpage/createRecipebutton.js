import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './createRecipebutton.css';
class RecipeBox extends Component {
    render(){
        return(
        <div className="recipebox">
            <div className="recipebuttons">
               <Link push to='/newrecipe'><button>Create</button></Link>
              
               
            </div>
        </div>
        )
    }
}

export default RecipeBox;