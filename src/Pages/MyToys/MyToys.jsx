import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import TableRow from "./TableRow";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyToys = () => {
    const notify = () => toast("deleted successfully");
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])
    const url = `http://localhost:5000/addedToys?sellerEmail=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])
    const handleDelete = id =>{
        const proceed = confirm('are you sure you want to delete')
        if(proceed){
            fetch(`http://localhost:5000/addedToys/${id}`, {
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                notify()
                const remaining = myToys.filter(myToy => myToy._id !== id);
                setMyToys(remaining);
            }
        })
        }
    }
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Sub-category</th>
                        <th>Seller</th>
                        <th>Available Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        myToys.map(myToy => <TableRow key={myToy._id} handleDelete={handleDelete}  myToy={myToy}></TableRow>)
                    }
                     <ToastContainer />
                </tbody>

            </table>
        </div>
    );
};

export default MyToys;