import React, { Component } from 'react'
import './header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: localStorage.getItem('name')
        }
    }
    render() {
        return (
            <header>
                <div className=" flex" style={{block:'inline-block'}}>
                    <div className="col-6">                <h1>Preparez | Meal Planning App</h1>
                    </div>
                    <div className="col-6"><p>{localStorage.getItem('name')!==null && ('Hi,'+this.state.username) } </p></div>
                </div>
            </header>
        )
    }
}

export default Header;