// src/components/ProductsPage.jsx

import { useState } from "react";
import productData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(productData);
  const [productsBackup, setProductsBackup] = useState(productData);

  /*-----FILTER PRODUCTS AS CHARACTERS ARE ENTERED DURING SEARCH-----*/
  const handleOnChange = (value) => {

    let filteredProducts
    if (value.length === 0) {
        filteredProducts = productsBackup; // reset the list of food to the foods variable
    }
    else {
        filteredProducts = productsBackup.filter((listItem) => {
            return listItem.name.toLowerCase().includes(value.toLowerCase());
        })
    }

    setProducts(filteredProducts); // update the state variable 'products'
};

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar filterProducts={handleOnChange}/>
      <ProductTable products={products}/>
    </div>
  );
}

export default ProductsPage;