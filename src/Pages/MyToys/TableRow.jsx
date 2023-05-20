

const TableRow = ({myToy,handleDelete}) => {
    // const notify = () => toast("deleted successfully");
    
    const {photo,name,price,category,sellerName,quantity,_id} = myToy;
   
    
    return (
        <tr>
        <td>
        <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo}/>
              </div>
            </div>
          </div>
        </td>
        <td>
          {name}
        </td>
        <td>{price}</td>
        <td>{category}</td>
        <td>{sellerName}</td>
        <td>{quantity}</td>
        <th>
          <button className="btn mr-3">Update</button>
          <button onClick={() => handleDelete(_id)} className="btn">Delete</button>
        </th>

      </tr>
    );
};

export default TableRow;