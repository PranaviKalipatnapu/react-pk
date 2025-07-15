import RestaurantComponent from "./RestaurantComponent";
import { useState, useEffect } from "react";

const BodyComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  console.log(listOfRestaurants);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=80424&tags=layout_CCS_Dosa&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const jsonData = await data.json();
    const jsonData1 = jsonData.data.cards.slice(3, 13);
    setListOfRestaurants(jsonData1);
    console.log("listOf rests:" + typeof jsonData1);
  };
  return (
    <div className="body">
      <div className="search-container">
        <div>Search container here</div>
      </div>
      <div className="btn-container">
        <button
          className="btn-1"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(fl => {
             return fl.card.card.info.avgRating > 4.5
            });
            setListOfRestaurants(filteredList); 
          }}
        >
          Top Restaurants
        </button>
      </div>

      <div className="restaurants-container">
        {listOfRestaurants.map((rest) => {
          const abc = rest.card.card;
          return <RestaurantComponent resData={abc.info} key={abc.info.id} />;
        })};

      </div>
    </div>
  );
};

export default BodyComponent;
