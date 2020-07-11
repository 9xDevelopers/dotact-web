import React from "react";
import "./App.less";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import About from "./pages/about/about";
import AdminHome from "./cp";
import Home from "./pages/home";
import ProductList from "./pages/product/product-list";
import {Menu} from "antd";

function App() {
    return (
        <div className="App">
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/about">About</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/products">Products</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/cp">Admin</Link>
                </Menu.Item>
            </Menu>


            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/products">
                    <ProductList/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/cp">
                    <AdminHome/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
