import React, {useEffect, useState, useCallback} from 'react'

import {API_ENDPOINT} from "../../utils/static";
import {NavLinks} from "./NavLinks";

const Navbar = () => {

    const [links, setLinks] = useState([]);

    const fetchAllCategories =  useCallback(() => {
        // https://fakestoreapi.com/products/categories
        fetch(`${API_ENDPOINT}/products/categories`)
        .then(res => res.json())
        .then(data => setLinks(data));
    }, [links])

    useEffect(() => {
        fetchAllCategories();
    }, [])

    return (
        <div>
        <NavLinks links = {links} />
          <hr />
        </div>
    )
}

export default React.memo(Navbar);
