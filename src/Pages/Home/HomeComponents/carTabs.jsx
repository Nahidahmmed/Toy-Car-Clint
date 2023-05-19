import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';




const CarTabs = () => {

    const [categories, setCategories] = useState([])
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        fetch('/public/CarData.json')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, [])

    const handleTabChange = (index) => {
        setActiveTab(index);
      };



    return (
        <div className=" lg:ml-5 lg:mr-5 mt-24 ">
        <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
          <TabList>
            <div className=" space-y-5 lg:flex space-x-52 items-end">
            {categories.map((category, index) => (
              <Tab key={index}><button className="btn">{category.name}</button></Tab>
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
                    <button className="btn btn-primary">{toy.details}</button>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    );
};

export default CarTabs;