// import logo from "./logo.svg";
import React from "react";
import Movies from "./components/movies";
import { ToastContainer } from "react-toastify";
import { Route, Redirect, Switch } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import notFound from "./components/notFound";
import NavBar from "./components/navbar";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import RegisterForm from "./components/registerForm";

class App extends React.Component {
  render() {
    return (
      <div>
        <ToastContainer/>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/notfound" component={notFound}></Route>
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/notfound" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
