import React, { Component } from "react";
import "./header.css";
import {Link} from "react-router-dom"

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem("name"),
    };
  }
  render() {
    const hasName = localStorage.getItem("name") !== null;
    return (
      <header>
        <div className=" flex" style={{ block: "inline-block" }}>
          <div className="col-6">
            <h1>Preparez | Meal Planning App</h1>
            <p>
              A recipe sharing app that holds a large recipe store to help with
              deciding whats for dinner!
            </p>
          </div>
          <div className="col-6">
            <p>{hasName && "Hi," + this.state.username} </p>
            {hasName && (
              <Link push to="/">
                <button className="logout"
                  onClick={() => this.logout()}>
                  Log Out
                </button>
              </Link>
            )}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
