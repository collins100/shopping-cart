import React from "react";
import PropTypes from "prop-types";
//import ImageGallery from "react-image-gallery";
import { Carousel } from "reactstrap";
import { getProduct } from "../reducers";


const ProductDetailPage = ({ images, title, price, inStock, Description }) => {

    return (
        <div>
            <h3>{title}</h3>
            <p>{price}</p>
            <Carousel>
                <Carousel.Item></Carousel.Item>
                <Carousel.Item></Carousel.Item>
                <Carousel.Item></Carousel.Item>
            </Carousel>
            <p>{inStock}</p>
            <p>{Desription}</p>
        </div>
    );
}

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

}

export default ProductDetailPage;