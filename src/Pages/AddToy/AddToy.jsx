
import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Provider/AuthProvider';




const AddToy = () => {
    const { user } = useContext(AuthContext);
console.log(user.email);
    const notify = () => toast("Toy added successfully");

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const data = { name, photo, sellerEmail, sellerName, category, price, rating, quantity, description }
        console.log(data);

        fetch("https://assignment-11-server-phi-azure.vercel.app/addedToys", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    notify(data.message);
                }
                form.reset();
            })
            .catch(error => console.log(error));

        
    };
    return (
        <div className="text-white font-bold bg-gray-700 min-h-screen">
            <div className="max-w-xl mx-auto ">
                <h1 className="text-2xl font-bold mb-4">Add a Toy</h1>
                <form onSubmit={handleSubmit}>
                    <div className=" flex space-x-7">
                        <div className="mb-4">
                            <label htmlFor="pictureUrl" className=" mb-1">
                                Picture URL:
                            </label>
                            <input
                                type="text"
                                name="photo"
                                id="pictureUrl"
                                className="w-full  text-gray-800 border-gray-300 rounded-md px-3 py-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="name" className="mb-1">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full  text-gray-800 border-gray-300 rounded-md px-3 py-2"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="sellerName" className="block mb-1">
                            Seller Name:
                        </label>
                        <input
                            type="text"
                            id="sellerName"
                            name="seller"
                            className="w-full text-gray-800 border-gray-300 rounded-md px-3 py-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="sellerEmail" className="block mb-1">
                            Seller Email:
                        </label>
                        <input
                            type="email"
                            id="sellerEmail"
                            name="sellerEmail"
                            defaultValue={user.email}
                            className="w-full text-gray-800 border-gray-300 rounded-md px-3 py-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subCategory" className="block mb-1">
                            Sub-category:
                        </label>
                        <select
                            id="subCategory"
                            name="category"
                            className="w-full  text-gray-800 border-gray-300 rounded-md px-3 py-2"
                            required
                        >
                            <option value="">Select a sub-category</option>
                            <option value="mathToys">Math Toys</option>
                            <option value="languageToys">Language Toys</option>
                            <option value="scienceToys">Science Toys</option>
                        </select>
                    </div>
                    <div className=" flex space-x-7">
                        <div className="mb-4">
                            <label htmlFor="price" className=" mb-1">
                                Price:
                            </label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                className="w-full text-gray-800 border-gray-300 rounded-md px-3 py-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="rating" className=" mb-1">
                                Rating:
                            </label>
                            <input
                                type="number"
                                id="rating"
                                name="rating"
                                className="w-full text-gray-800 border-gray-300 rounded-md px-3 py-2"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="quantity" className="block mb-1">
                            Available Quantity:
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            className="w-full text-gray-800 border-gray-300 rounded-md px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block mb-1">
                            Description:
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            className="w-full text-gray-800 border-gray-300 rounded-md px-3 py-2"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <input className="bg-blue-500 text-white px-4 py-2 rounded-md" type="submit" value="Submit" />
                    </div>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
};

export default AddToy;