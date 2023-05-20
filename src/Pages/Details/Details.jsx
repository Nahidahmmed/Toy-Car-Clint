import { useLoaderData } from "react-router-dom";


const Details = () => {
    const data = useLoaderData()
    const {description,name,photo,price,quantity,rating,sellerEmail,sellerName} = data;
    return (
        <div className="max-w-2xl h-[550px] bg-white rounded-md shadow-md overflow-hidden mx-auto space-y-5">
        <img src={photo} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4 space-y-5">
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Seller:</span> {sellerName}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Seller Email:</span> {sellerEmail}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Price:</span> ${price}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Rating:</span> {rating}/5
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Available Quantity:</span> {quantity}
          </p>
          <hr className="my-4" />
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
};

export default Details;