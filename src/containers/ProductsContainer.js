import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
//import CartContainer from './CartContainer';

const ProductsContainer = ({ products, addToCart }) => (
    <ProductsList title="Products">
        {products.map(product =>
            <ProductItem
                key={product.id}
                product={product}
                onAddToCartClicked={() => addToCart(product.id)} />
        )}
    </ProductsList>

)

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        //thumbnail: PropTypes.string.isRequired,
        inStock: PropTypes.bool.isRequired,
        // images: PropTypes.arrayOf(PropTypes.element).isRequired,
        reviews: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })),
        tags: PropTypes.arrayOf(PropTypes.string)

    })).isRequired,
    addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    products: getVisibleProducts(state.products)
})

export default connect(
    mapStateToProps,
    { addToCart }
)(ProductsContainer)