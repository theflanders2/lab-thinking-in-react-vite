

function ProductRow({ listItem }) {
    return (
      <div>
          <tr>
            {listItem.inStock ?
              <td scope="row"><span>{listItem.name}</span></td> :
              <td scope="row"><span style={{color:"red"}}>{listItem.name}</span></td>}
            <td scope="row">{listItem.price}</td>
          </tr>        
      </div>
    );
  }
  
  export default ProductRow;