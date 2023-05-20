import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const CarTabs = () => {

  const [categories, setCategories] = useState([])
  const [activeTab, setActiveTab] = useState(0);
  const notify = () => toast("You have to log in first to view details");
  useEffect(() => {
    fetch('http://localhost:5000/newcars')
      .then(res => res.json())
      .then(data => {
        setCategories(data);
      })
  }, [])

  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  const handleDetails = () => {
    notify()
  }


  return (
    <div className=" lg:ml-5 mr-5 mt-24 ">
      <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
        <TabList>
          <div className=" space-y-5 lg: flex space-x-52 items-end">
            {categories.map((category, index) => (
              <Tab key={index}><button className=" btn">{category.name}</button></Tab>
            ))}
          </div>
        </TabList>

        {categories.map((category, index) => (
          <TabPanel key={index}>
            <div className="subCategories mt-8 h-[700px]  lg:grid grid-cols-2 gap-4 mx-auto">
              {category.toys.map((toy, index) => (
                <div key={index} className="mx-auto card-body mt-9 h-[500px] border ">
                  <img className="w-72 h-64" src={toy.image} alt={toy.name} />
                  <div className="space-y-3 text-xl font-bold">
                    <h3>{toy.name}</h3>
                    <p>{toy.price}</p>
                    <p>Rating: {toy.rating}</p>
                    <Link to={`/login`}><button onClick={handleDetails} className="btn btn-primary">{toy.details}</button></Link>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
      <ToastContainer />
    </div>
  );
};

export default CarTabs;