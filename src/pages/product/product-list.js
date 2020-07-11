import React, {Component} from 'react';
import {Link, useRouteMatch, Switch, Route} from "react-router-dom";
import ProductDetail from "./product-detail";

function ProductList() {
    let {path, url} = useRouteMatch();

    return (
        <div>
            <h2>products</h2>
            <ul>
                <li>
                    <Link to={`${url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a product.</h3>
                </Route>
                <Route path={`${path}/:productId`}>
                    <ProductDetail/>
                </Route>
            </Switch>
        </div>
    );
}

export default ProductList;
