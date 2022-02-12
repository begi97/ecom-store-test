import React, {useEffect, useState, useCallback} from 'react'
import {API_ENDPOINT} from "../../utils/static";
import {Title} from "../PageTitle/Title";
import {ProductsListing} from "../PLP/ProductsListing";
import {useSelector, useDispatch} from "react-redux";
import {listCategories} from "../../state/actions/products"; 
import {useParams} from "react-router-dom";
import {ProductLoader} from "../ProductSkeleton/ProductLoader";

const Category = () => {

    const [loading, setLoading] = useState(true);

    const products = useSelector(state => state);
    const dispatch = useDispatch();
    let { category_name } = useParams();

    const title = category_name;



    const fetchCategories =  useCallback(() => {
        setLoading(true);
        // https://fakestoreapi.com/products/
        fetch(`${API_ENDPOINT}/products/category/${category_name}`)
        .then(res => res.json())
        .then(data => {
            dispatch(listCategories(data));
            setLoading(false);
        });
    }, [products, category_name])


    useEffect(() => {
        fetchCategories();
    }, [category_name])
    

    return (
        <>
        <Title title = {title} />
        {loading ? <ProductLoader /> : <ProductsListing products = {products} />}
        </>
    )
}

export default Category;
