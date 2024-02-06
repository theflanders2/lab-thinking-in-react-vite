// src/components/ProductsPage.jsx

import { useState } from "react";
import productData from "./../../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(productData);

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar />
      <ProductTable listItem={listItem}/>
    </div>
  );
}

export default ProductsPage;