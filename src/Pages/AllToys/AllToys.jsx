import { Link, useLoaderData } from "react-router-dom";


const AllToys = () => {

    const toys = useLoaderData();
    console.log(toys);
    const handleSubmit =(event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.search.value;
       const toy = {name}
       console.log(toy);
        
    }
    return (
        
        <div className="max-w-4xl mx-auto">
            <form className=" mb-6 mt-8" onSubmit={handleSubmit}>
                <input className="btn" type="submit" value="search" />
            <input className="border-2 p-4 border-gray-800 rounded h-11 w-1/3 ms-2" type="search" placeholder="Toy Name" name="search" id="" />
            </form>
        <h1 className="text-2xl font-bold mb-4">All Toys</h1>
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Seller</th>
              <th className="py-2 px-4 border-b">Toy Name</th>
              <th className="py-2 px-4 border-b">Sub-category</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Available Quantity</th>
              <th className="py-2 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <tr key={toy._id}>
                <td className="py-2 px-10 border-b">{toy.sellerName}</td>
                <td className="py-2 px-10 border-b">{toy.name}</td>
                <td className="py-2 px-10 border-b">{toy.category}</td>
                <td className="py-2 px-10 border-b">{toy.price}</td>
                <td className="py-2 px-16 border-b">{toy.quantity}</td>
                <td className="py-2 px-10 border-b">
                  <Link to={`/detail/${toy._id}`}>
                  <button className="btn text-white px-3 py-1 rounded-md">
                    View Details
                  </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default AllToys;