import React, {Component} from 'react';
import {useParams} from "react-router-dom";

function ProductDetail() {
    let {productId} = useParams();

    return (
        <div>
            <h3>{productId}</h3>
        </div>
    );
}

export default ProductDetail;
