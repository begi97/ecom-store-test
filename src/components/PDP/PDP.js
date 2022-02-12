import React, {useCallback, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {listSingleProduct} from "../../state/actions/products";
import {API_ENDPOINT} from "../../utils/static";
import {useSelector, useDispatch} from "react-redux";
import {PrimaryButton} from "../Button/PrimaryButton";

const PDP = () => {


    const {id} = useParams();


    const product = useSelector(state => state);
    const dispatch = useDispatch();

    const fetchSingleProduct =  useCallback(() => {
        // https://fakestoreapi.com/products/
        fetch(`${API_ENDPOINT}/products/${id}`)
        .then(res => res.json())
        .then(data => dispatch(listSingleProduct(data)));
    }, [id]);


    useEffect(() => {
        console.log('sss')
        fetchSingleProduct();
    }, []);
    // console.log(id);

    


    return (
        <section className="single-product">
            <div className="single-product-flex">
                <div className="single-product-image-container">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="product-details">
                    <dl>
                        <div className="detail-container">
                            <dt className="heading-3">NAME</dt>
                            <dd className="paragraph py-1">{product.title}</dd>
                        </div>
                        <div className="detail-container">
                            <dt className="heading-4">PRICE</dt>
                            <dd className="paragraph py-1">{product.price}</dd>
                        </div>
                        <div className="detail-container">
                            <dt className="heading-4">Description</dt>
                            <dd className="paragraph py-1">{product.description}</dd>
                        </div>
                    </dl>
                    <PrimaryButton text_content = "BUY NOW" />
                </div>
            </div>
        </section>
    )
}

export default PDP;
