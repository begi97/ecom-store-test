import React from 'react';
import {Link} from "react-router-dom";

export const ProductsListing = ({products}) => {
    

    return (
        <section className="all-product-flex">
             {products.length > 0 && products.map(product => {
                //  console.log(product)
              const {title, price, rating, category, id, image} = product;   
            return <Link to={`/category/${category}/${id}`} className="product" key = {id}>
                <article className="border">
                    <div className="image-container">
                        <img src={image} alt={title} />
                    </div>
                    <div className="product-details">
                        <div className="name">
                            <h3>{title}</h3>
                        </div>
                        <div className="price">
                            <var>{price} <abbr title="$">$</abbr></var>
                        </div>
                    </div>
                </article>
            </Link>
            })}
            </section>
    )
}
