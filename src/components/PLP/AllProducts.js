import React, {useEffect, useState, useCallback} from 'react'
import {API_ENDPOINT} from "../../utils/static";
import {ProductsListing} from "./ProductsListing";
import {Title} from "../PageTitle/Title";

import {useSelector, useDispatch} from "react-redux";
import {listProducts} from "../../state/actions/products"; 
import {ProductLoader} from "../ProductSkeleton/ProductLoader";
import { sort } from '../../utils/sort';
import { limit } from '../../utils/limit';

 const AllProducts = () => {
    
    const [loading, setLoading] = useState(true);
    const [isAsc, setIsAsc] = useState(true); 
    const [itemsToShow, setItemsToShow] = useState(10);

    const products = useSelector(state => state);
    const dispatch = useDispatch();

    const title = "All Products";


    const fetchAllProducts =  useCallback(() => {
        // https://fakestoreapi.com/products/
        fetch(`${API_ENDPOINT}/products`)
        .then(res => res.json())
        .then(data => {
            dispatch(listProducts(data))
            setLoading(false);
        });
    }, [products])


    useEffect(() => {
        fetchAllProducts();
    }, []);

    // SORTING PRODUCTS
    const sort_products = () => {
        let sort_order;
        
        // if order is ascending set it to descending
        if(isAsc) {
            setIsAsc(!isAsc);
            sort_order = "desc";
        } else {
            setIsAsc(!isAsc);
            sort_order = "asc";
        }
        // setLoading(true);
        sort(API_ENDPOINT, "products", sort_order)
        .then(data => {
            dispatch(listProducts(data))
        });
        // setLoading(false);
    }

    // LIMIT PRODUCTS
    const limitProducts = () => {

        // setLoading(true);

        limit(API_ENDPOINT, "products", itemsToShow)
        .then(data => dispatch(listProducts(data)))

        // setLoading(false);
    }

    // LIMIT PRODUCTS
    const showAllProducts = () => {

        // setLoading(true);

        fetchAllProducts();

        // setLoading(false);
    }

    return (<>
        <div className="sort-filters-wrapper">
            <button onClick={sort_products} title = {isAsc ? "ASCENDING ORDER" : "DESCENDING ORDER"}>
                {/* <i class="fa-solid fa-arrow-down-wide-short"></i> */}
                {isAsc ? <i className="fa-solid fa-arrow-up-short-wide"></i> : <i className="fa-solid fa-arrow-down-wide-short"></i>}
            </button>
            <div>
                <input type="range" id="volume" name="volume" min="1" max="10" value = {itemsToShow} onChange = {(e) => setItemsToShow(e.target.value)} />
                {/* <label htmlFor="volume">Show Products - {itemsToShow}</label> */}
                <button onClick={limitProducts}>
                    Show {itemsToShow}
                </button>
                <button onClick={showAllProducts}>
                    Show All
                </button>
            </div>
        </div>
        <Title title = {title}  />
        {loading ? <ProductLoader /> :  <ProductsListing products = {products} />}
    </>)
}

export default React.memo(AllProducts);
