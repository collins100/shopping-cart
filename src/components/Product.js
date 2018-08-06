import React from 'react'
import PropTypes from 'prop-types'
//import "./css/Product.css"

const Product = ({ price, quantity, title, thumbnail, description }) => (
    <div className="product">
        <div>
            <img alt={title} src={thumbnail} />
        </div>
        <h4 className="product-title">{title}</h4>
        <p className="product-price">{price}</p>

    </div>
)

Product.propTypes = {
    price: PropTypes.number,
    quantity: PropTypes.number,
    //thumbnail: PropTypes.string,
    title: PropTypes.string
}

export default Product