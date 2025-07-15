import { IMG_CDN_URL } from "../utils/constants";

const RestaurantComponent = (props) => {
  const restaurantData = props.resData;
  return (
    <div className="restaurant-card">
      <img className="rest-logo" src={IMG_CDN_URL + restaurantData.cloudinaryImageId} />
      <h3>{restaurantData.name}</h3>
      <h4>{restaurantData.cuisines.join(",")}</h4>
      <h4>{restaurantData.costForTwo}</h4>
      <h4>{restaurantData.sla.deliveryTime} minutes</h4>
      <h4>{restaurantData.avgRating} stars</h4>
    </div>
  );
}

export default RestaurantComponent;