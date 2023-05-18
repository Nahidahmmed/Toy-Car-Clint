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
        <div className="ml-5 mr-5 mt-24">
        <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
          <TabList>
            <div className="flex space-x-5">
            {categories.map((category, index) => (
              <Tab key={index}><button className="btn">{category.name}</button></Tab>
            ))}
            </div>
          </TabList>
  
          {categories.map((category, index) => (
            <TabPanel key={index}>
              <div className="subCategories w-6/12 lg:grid grid-cols-2 gap-4">
                {category.toys.map((toy, index) => (
                  <div key={index} className="toyCard">
                    <img className="w-72 h-2/4" src={toy.image} alt={toy.name} />
                    <h3>{toy.name}</h3>
                    <p>{toy.price}</p>
                    <p>Rating: {toy.rating}</p>
                    <button className="btn btn-primary">{toy.details}</button>
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