import ProductRow from "./ProductRow";

function ProductTable({ products }) {


  return (
    <div id="container">
      <div id="table-container">
        <table>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map(listItem => {
              return(
                <ProductRow 
                key={listItem.id}
                listItem={listItem} />
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTable;