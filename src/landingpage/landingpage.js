import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';import food from './landingpage.jpg';
import Header from './header'
import LoginForm from './loginForm'
import NewUserForm from './newuserform'
import RecipePage from './recipepage'
import CreateRecipeForm from './createRecipeForm'
import RecipeCard from './recipeCard'
import EditRecipeForm from './editRecipe';





class LandingPage extends Component {
    render(){
    return (
      <div className="App">
        <Header/>
      
      <main className='main'>
        <Route exact path='/' component={LoginForm} />
        <Route path='/newuser' component={NewUserForm} />
        
        <Route path='/homepage' component={RecipePage} />
        <Route path='/newrecipe' component={CreateRecipeForm} />
        <Route path='/editrecipe' component={EditRecipeForm} />
        <Route path='/recipecard'  render={(props) => <RecipeCard {...props}/>} />
        <img className='image'src={food} alt="food" height={700} width={600}/>
        </main>
      </div>
    );
  }
}
  
  export default LandingPage;