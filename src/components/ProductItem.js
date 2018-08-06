import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({ product, onAddToCartClicked }) => (
    <div style={{ marginBottom: 20 }}>
        <Product
            title={product.title}
            price={product.price}
            quantity={product.inventory} />
        <button
            onClick={onAddToCartClicked}
            disabled={product.inStock === true ? '' : 'disabled'}>
            {product.inStock === true ? 'Add to cart' : 'Sold Out'}
        </button>
    </div>
)

ProductItem.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inStock: PropTypes.bool.isRequired,
    }).isRequired,
    onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem